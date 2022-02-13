import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { hashSync } from 'bcrypt';

import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { RequestWithUser } from './interfaces/auth.interface';
import { JwtAuthenticationGuard } from './guards/jwtAuthentication.guard';

@Controller()
export class AuthController {
  private readonly peeper = process.env.API_TOKEN;

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() body: User): Promise<User> {
    const password = hashSync(body.password + this.peeper, 12);

    return this.authService.createUser({
      ...body,
      password,
    });
  }

  @HttpCode(205)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  login(@Req() req: RequestWithUser, @Res() response: Response): Response {
    const { user } = req;

    const jwtToken = this.authService.getCookieWithJwtToken(user.id);
    const expireDate = new Date(Date.now() + 3600 * 1000 * 24 * 2);

    response.cookie('_jbt', jwtToken, {
      httpOnly: true,
      path: '/',
      expires: expireDate,
    });

    return response.send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  getMyInfo(@Req() req: RequestWithUser): User {
    return req.user;
  }

  @HttpCode(205)
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  logOut(@Res() response: Response): void {
    response.cookie('_jbt', '', {
      httpOnly: true,
      path: '/',
      expires: new Date(),
    });

    response.send();
  }
}
