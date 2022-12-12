import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthenticationService } from './authentication.service';

@Controller()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authenticationService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: AuthDto) {
    return this.authenticationService.signin(dto.email, dto.password);
  }
}
