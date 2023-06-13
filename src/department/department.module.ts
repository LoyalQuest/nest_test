import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DatabaseModule } from '../database/database.module';
import { departmentProviders } from './department.providers';
import { employeeProviders } from '../employee/employee.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [...departmentProviders, DepartmentService, ...employeeProviders],
})
export class DepartmentModule {}
