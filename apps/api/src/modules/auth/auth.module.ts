import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../prisma.service';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, JwtService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
