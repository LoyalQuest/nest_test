import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmployeeService } from './employee.service';
import { employeeProviders } from './employee.providers';
import { EmployeeController } from './employee.controller';
import { departmentProviders } from '../department/department.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [...employeeProviders, EmployeeService, ...departmentProviders],
})
export class EmployeeModule {}
