import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService) { }

  async validateUser(username: string, password: string) {
    try {
      const user: User = await this.userService.findOne(username);
      if (!user) { return null };

      if (user.password != password) {
        return null;
      }
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }

  async login(user: CreateAuthDto) {
    const payload = { userId: user.password, email: user.email };
    return {
      role: user.email == 'admin@education.com' ? 'school' : 'student',
      token: this.jwtService.sign(payload),
    };
  }

  async authMe(email: string) {

    return this.userService.authMe(email);
  }

}
