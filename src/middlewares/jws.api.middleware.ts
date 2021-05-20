import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ErrorCodes } from 'src/config/enums';

interface EnvironmentVariables {
  JWT_SECRET: string;
}

@Injectable()
export class JwsApiMiddleware implements NestMiddleware {
  jwtSecret: string;

  constructor(private configService: ConfigService<EnvironmentVariables>) {
    this.jwtSecret = this.configService.get<string>('JWT_SECRET');
  }

  use(req: Request, res: Response, next: NextFunction) {
    const sign = jwt.sign(req.body, this.jwtSecret).replace(/\.(.*?)\./g, '..');
    const xSignJws = req.header('x-sign-jws');
    console.log(`jwt=${sign}`);
    if (xSignJws !== sign) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        errorCode: ErrorCodes.InvalidToken,
      });
      return;
    }
    next();
  }
}
