import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EmployeeService } from './employee.service';
import { employeeProviders } from './employee.providers';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [...employeeProviders, EmployeeService],
})
export class EmployeeModule {}
