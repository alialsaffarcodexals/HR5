import { PrismaService } from '../../prisma.service.js';
import { DepartmentsService } from '../departments/departments.service.js';
import { EmployeesService } from '../employees/employees.service.js';

describe('Headship rules', () => {
  const prisma = new PrismaService();
  const deptSvc = new DepartmentsService(prisma);
  const empSvc = new EmployeesService(prisma);

  beforeAll(async () => {
    await prisma.$connect();
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "PayrollLine","PayrollRun","Employee","Department" RESTART IDENTITY CASCADE;`);
    const d = await deptSvc.create({ name: 'Test', location: 'Sydney' });
    const e1 = await empSvc.create({ firstName: 'A', lastName: 'A', gender: 'M', address: 'x', payScale: 3, departmentId: d.id });
    const e2 = await empSvc.create({ firstName: 'B', lastName: 'B', gender: 'F', address: 'y', payScale: 4, departmentId: d.id });
    await deptSvc.setHead(d.id, e1.id);
  });

  afterAll(async () => { await prisma.$disconnect(); });

  it('prevents reassigning head to another department', async () => {
    const d2 = await deptSvc.create({ name: 'X', location: 'Tokyo' });
    const head = (await prisma.employee.findFirst({ where: { isHead: true } }))!;
    await expect(empSvc.update(head.id, { departmentId: d2.id, version: head.version })).rejects.toBeTruthy();
  });
});
