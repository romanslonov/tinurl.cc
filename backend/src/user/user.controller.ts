import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller()
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  create(@Request() req) {
    return req.user;
  }
}
