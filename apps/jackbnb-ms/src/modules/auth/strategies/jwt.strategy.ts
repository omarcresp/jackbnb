import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { User } from '../models/auth.model';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request.cookies?._jbt;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.API_TOKEN,
    });
  }

  async validate(payload: { sub: string }): Promise<User> {
    return this.authService.getById(payload.sub);
  }
}
