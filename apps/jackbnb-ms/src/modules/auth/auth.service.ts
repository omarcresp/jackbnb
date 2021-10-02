import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { compareSync } from 'bcrypt';

import { User, UserDocument } from './models/auth.model';

@Injectable()
export class AuthService {
  private readonly peeper = process.env.API_TOKEN;

  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  createUser(body: User): Promise<User> {
    const user = new this.UserModel(body);

    return user.save();
  }

  async getByEmail(email: string): Promise<UserDocument> {
    const user = await this.UserModel.findOne({ email }).exec();

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  getById(id: string): Promise<User> {
    const user = this.UserModel.findById(id).exec();

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  getCookieWithJwtToken(userId: string): string {
    const payload = { sub: userId };

    return this.jwtService.sign(payload);
  }

  async getAuthUser(email: string, password: string): Promise<User> {
    const user = await this.getByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    await this.verifyPassword(password, user.password);

    return user.toJSON();
  }

  private async verifyPassword(
    password: string,
    hashPassword: string,
  ): Promise<void> {
    const validPassword = compareSync(password + this.peeper, hashPassword);

    if (!validPassword) {
      throw new UnauthorizedException();
    }
  }
}
