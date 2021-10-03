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
import { FastifyReply } from 'fastify';
import { hashSync } from 'bcrypt';

import { AuthService } from './auth.service';
import { User } from './models/auth.model';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { RequestWithUser } from './auth.interface';
import { JwtAuthenticationGuard } from './guards/jwtAuthentication.guard';

@Controller('auth')
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
  login(
    @Req() req: RequestWithUser,
    @Res() response: FastifyReply,
  ): void {
    const { user } = req;

    const authCookie = this.authService.getCookieWithJwtToken(user.id);

    response.header('set-cookie', authCookie).send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  getMyInfo(@Req() req: RequestWithUser): User {
    return req.user;
  }

  @HttpCode(205)
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  logOut(@Res() response: FastifyReply): void {
    const logoutCookie = this.authService.getCookieForLogOut();

    response.header('set-cookie', logoutCookie).send();
  }
}
