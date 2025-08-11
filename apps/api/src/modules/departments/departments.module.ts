import { Module } from '@nestjs/common';
import { DepartmentsController } from './departments.controller.js';
import { DepartmentsService } from './departments.service.js';
import { PrismaService } from '../../prisma.service.js';

@Module({
  controllers: [DepartmentsController],
  providers: [DepartmentsService, PrismaService],
  exports: [DepartmentsService],
})
export class DepartmentsModule {}
