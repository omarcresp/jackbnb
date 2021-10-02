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
import { User, UserDocument } from './models/auth.model';
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
  async login(
    @Req() req: RequestWithUser,
    @Res() response: FastifyReply,
  ): Promise<UserDocument> {
    const { user } = req;

    console.log('login controller', user);

    const cookie = this.authService.getCookieWithJwtToken(user.id);

    console.log('cookie', cookie);

    response.header('Set-Cookie', cookie);

    console.log('cookie set', cookie);

    return user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  getMyInfo(@Req() req: RequestWithUser): User {
    return req.user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  logOut(@Res() response: FastifyReply): FastifyReply {
    response.header('Set-Cookie', this.authService.getCookieForLogOut());

    return response.status(200);
  }
}
