import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from '../entity/employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<string> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException("EmployeeEntity doesn't exist");
    } else {
      return employee.first_name;
    }
  }

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }
}
