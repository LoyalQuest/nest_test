import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../entity/employee.entity';
import { UpdateResult } from 'typeorm';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException("Employee doesn't exist");
    } else {
      return employee;
    }
  }

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }

  @Put('update/:id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() employeeData: Employee,
  ): Promise<UpdateResult> {
    const updatedEmployee = await this.employeeService.updateEmployee(
      id,
      employeeData,
    );

    if (!updatedEmployee) {
      throw new NotFoundException("Updated Employee doesn't exist");
    } else {
      return updatedEmployee;
    }
  }
}
