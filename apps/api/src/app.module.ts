import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { EmployeesModule } from './modules/employees/employees.module.js';
import { DepartmentsModule } from './modules/departments/departments.module.js';
import { PayrollModule } from './modules/payroll/payroll.module.js';
import { HealthModule } from './modules/health/health.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { MetricsModule } from './modules/metrics/metrics.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    EmployeesModule,
    DepartmentsModule,
    PayrollModule,
    HealthModule,
    AuthModule,
    MetricsModule,
  ],
})
export class AppModule {}
