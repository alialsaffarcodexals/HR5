import { Worker } from 'bullmq';
import { PrismaService } from './prisma.service';
import { PayrollService } from './modules/payroll/payroll.service';

const connection = { connection: { url: process.env.REDIS_URL || 'redis://localhost:6379' } };

const prisma = new PrismaService();
await prisma.$connect();
const payroll = new PayrollService(prisma);

const w = new Worker('payroll', async job => {
  const { runDate, actorId } = job.data;
  return payroll.run(runDate, actorId);
}, connection);

console.log('Worker started.');
