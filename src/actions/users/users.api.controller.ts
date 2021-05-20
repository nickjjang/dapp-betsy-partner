import { Body, Controller, Post } from '@nestjs/common';
import { BalanceUserDto } from './dto/balance-user.dto';
import { ProfileUserDto } from './dto/profile-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersApiController {
  constructor(private readonly usersService: UsersService) {}

  @Post('profile')
  profile(@Body() profileUserDto: ProfileUserDto) {
    return this.usersService.findOne(profileUserDto.token);
  }

  @Post('balance')
  balance(@Body() balanceUserDto: BalanceUserDto) {
    return this.usersService.findOne(balanceUserDto.token);
  }
}
