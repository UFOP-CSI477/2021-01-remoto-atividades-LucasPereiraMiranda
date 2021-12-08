import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: CreateSessionDto) {
    return this.authService.login(email, password);
  }
}
