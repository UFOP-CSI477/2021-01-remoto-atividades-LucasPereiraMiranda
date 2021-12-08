import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserToken } from './interface/userToken.interface';
import { UserPayload } from './interface/userPayload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async login(email: string, password: string): Promise<UserToken> {
    const user = await this.validateUser(email, password);
    const payload: UserPayload = {
      username: user.email,
      sub: user.id,
      userType: user.userType,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedException('Invalid Email address or password');
  }
}
