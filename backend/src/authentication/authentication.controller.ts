import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    const user = await this.authenticationService.signup(dto);
    return {
      user,
      token: this.authenticationService.getJwtToken(user.email),
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() req) {
    return {
      user: req.user,
      token: this.authenticationService.getJwtToken(req.user.email),
    };
  }
}
