import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from './prisma.module';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthenticationModule,
    UserModule,
    LinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
