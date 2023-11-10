import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {hash} from 'bcrypt';
import { RegisterDto } from 'src/auth/dtos/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){

  }

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(body: RegisterDto){
    const saltOrRounds = 12;
    const hashedPassword = await hash(body.password, saltOrRounds);
    return this.userRepository.save({...body, password: hashedPassword});
  }
}
