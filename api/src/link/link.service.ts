import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLinkDto } from './create-link.dto';
import { nanoid } from 'nanoid';
import { UpdateLinkDto } from './update-link.dto';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateLinkDto) {
    try {
      const hash = dto.hash ?? this.generateHash();

      const link = await this.prisma.link.create({
        data: { ...dto, hash, ownerId: userId },
      });

      return { link };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'This hash is already taken.',
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw error;
    }
  }

  async update(userId: number, hash: string, dto: UpdateLinkDto) {
    try {
      await this.prisma.link.findFirstOrThrow({
        where: { ownerId: userId, hash },
      });

      const link = await this.prisma.link.update({
        where: { hash },
        data: { ...dto },
      });

      return { link };
    } catch (error) {
      throw new HttpException(
        'Requested link is not found.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(userId: number, hash: string) {
    try {
      await this.prisma.link.deleteMany({ where: { hash, ownerId: userId } });
    } catch (error) {
      throw new HttpException(
        'This link is not available.',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async getOneByHash(userId: number, hash: string) {
    try {
      const link = await this.prisma.link.findFirstOrThrow({
        where: { hash, ownerId: userId },
      });

      return { link };
    } catch (error) {
      throw new HttpException(
        'Requested link is not found.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getList(userId: number) {
    try {
      console.log(userId);
      const links = await this.prisma.link.findMany({
        where: { ownerId: userId },
      });

      return { links };
    } catch (error) {
      throw new HttpException(
        'Requested link is not found.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async redirect(hash: string) {
    try {
      await this.prisma.link.findFirstOrThrow({
        where: { hash, published: true },
      });

      const updatedLink = await this.prisma.link.update({
        where: { hash },
        data: { views: { increment: 1 } },
      });

      return { link: updatedLink };
    } catch (error) {
      throw new HttpException(
        'Requested link is not found.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  generateHash() {
    return nanoid(7);
  }
}
