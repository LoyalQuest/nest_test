import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from '../entity/department.entity';
import { Employee } from '../entity/employee.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Department> {
    const department = await this.departmentService.findOne(id);
    if (!department) {
      throw new NotFoundException("Employee doesn't exist");
    } else {
      return department;
    }
  }

  @Patch('raise/:id')
  async raiseDepartment(
    @Param('id') id: number,
    @Body('percentage') percentage: number,
  ): Promise<Employee[]> {
    const raisedDepartment = await this.departmentService.raiseDepartment(
      id,
      percentage,
    );
    if (!raisedDepartment) {
      throw new NotFoundException("RaisedDept doesn't exist");
    } else {
      return raisedDepartment;
    }
  }

  @Get()
  async findAll() {
    return this.departmentService.findAll();
  }
}
