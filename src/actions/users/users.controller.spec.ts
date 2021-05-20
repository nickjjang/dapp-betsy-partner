import { Test, TestingModule } from '@nestjs/testing';
import { UsersAdminController } from './users.admin.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersAdminController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersAdminController>(UsersAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
