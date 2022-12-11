import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.sectors = body.sectors;

    return this.repository.save(user);
  }
}
