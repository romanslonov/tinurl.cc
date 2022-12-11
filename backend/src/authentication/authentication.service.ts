import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(data: Prisma.UserCreateInput) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const { password, ...user } = await this.userService.createUser({
        ...data,
        password: hashedPassword,
      });

      return user;
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

  async validateUser(email: string, plainTextPassword: string) {
    try {
      const { password, ...user } = await this.userService.findByEmail(email);
      await this.verifyPassword(plainTextPassword, password);

      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  getJwtToken(email: string) {
    const payload = { email };

    return this.jwtService.sign(payload);
  }
}
