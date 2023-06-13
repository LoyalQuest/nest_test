import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from '../entity/department.entity';

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

  @Get()
  async findAll() {
    return this.departmentService.findAll();
  }
}
