import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';
import { JWTPayload } from './types';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const { password, ...user } = await this.userService.createUser({
        ...dto,
        password: hashedPassword,
      });

      const token = this.getJwtToken(user.id);

      return { user, token };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'This email already used.',
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw error;
    }
  }

  async signin(email: string, plainTextPassword: string) {
    try {
      const { password, ...user } = await this.userService.findByEmail(email);

      await this.verifyPassword(plainTextPassword, password);

      const token = this.getJwtToken(user.id);

      return { user, token };
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );

    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  getJwtToken(userId: number) {
    const payload: JWTPayload = { sub: userId };

    return this.jwtService.sign(payload);
  }
}
