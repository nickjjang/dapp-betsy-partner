import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/users.schema';
import { UsersApiController } from './users.api.controller';
import { UsersAdminController } from './users.admin.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersAdminController, UsersApiController],
  providers: [UsersService],
})
export class UsersModule {}
