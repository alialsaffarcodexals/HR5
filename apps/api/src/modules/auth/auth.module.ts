import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller.js';
import { PrismaService } from '../../prisma.service.js';
import { AuthService } from './auth.service.js';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, JwtService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
