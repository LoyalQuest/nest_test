import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../entity/Employee';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<string> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException("Employee doesn't exist");
    } else {
      return employee.first_name;
    }
  }

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }
}
