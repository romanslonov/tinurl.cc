import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthenticationService } from './authentication.service';

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

  @Post('signin')
  async signin(@Body() dto: AuthDto) {
    const user = await this.authenticationService.validateUser(
      dto.email,
      dto.password,
    );

    return {
      user: user,
      token: this.authenticationService.getJwtToken(dto.email),
    };
  }
}
