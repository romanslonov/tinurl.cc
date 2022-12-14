import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './authentication/jwt-auth.guard';
import { CreateLinkDto } from './link/create-link.dto';
import { LinkService } from './link/link.service';

@Controller()
export class AppController {
  constructor(private linkService: LinkService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  create(@Req() req) {
    return { profile: req.user };
  }

  @Post('generate')
  generateLink(@Body() dto: CreateLinkDto) {
    return this.linkService.create(null, dto);
  }

  @Get('redirect/:hash')
  redirect(@Param() params) {
    return this.linkService.redirect(params.hash);
  }
}
