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
import { User } from './models/auth.model';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { RequestWithUser } from './auth.interface';
import { JwtAuthenticationGuard } from './guards/jwtAuthentication.guard';

@Controller({ path: 'auth' })
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

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(
    @Req() req: RequestWithUser,
    @Res() response: Response,
  ): Promise<Response> {
    const { user } = req;
    const cookie = this.authService.getCookieWithJwtToken(user.id);

    response.setHeader('Set-Cookie', cookie);

    return response.send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  getMyInfo(@Req() req: RequestWithUser): User {
    return req.user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  logOut(@Res() response: Response): Response {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());

    return response.sendStatus(200);
  }
}
