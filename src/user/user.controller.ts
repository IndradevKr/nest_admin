import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async all(): Promise<User[]> {
    return await this.userService.getAll();
  }
}
