import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  //@UseGuards(AuthGuard('local'))
  @Post()
  async login(@Body() authData: CreateAuthDto) {
    console.log(authData)
    return this.authService.login(authData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('me')
  async authMe(@Body() data: { email: string }) {
    return this.authService.authMe(data.email);
  }
}
