import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { CreateLinkDto } from './create-link.dto';
import { UpdateLinkDto } from './update-link.dto';
import { LinkService } from './link.service';

@Controller('links')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() dto: CreateLinkDto) {
    return this.linkService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getList(@Req() req) {
    return this.linkService.getList(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':hash')
  getOneByHash(@Req() req, @Param() params) {
    return this.linkService.getOneByHash(req.user.id, params.hash);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':hash')
  update(@Req() req, @Param() params, @Body() dto: UpdateLinkDto) {
    return this.linkService.update(req.user.id, params.hash, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':hash')
  delete(@Param() params, @Req() req) {
    return this.linkService.delete(req.user.id, params.hash);
  }
}
