import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('signup')
  async signup(@Body() data: Prisma.UserCreateInput) {
    const user = await this.authenticationService.signup(data);
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
