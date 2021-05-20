import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersApiController } from './actions/users/users.api.controller';
import { UsersModule } from './actions/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwsApiMiddleware } from './middlewares/jws.api.middleware';

@Module({})
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwsApiMiddleware).forRoutes(UsersApiController);
  }
}
