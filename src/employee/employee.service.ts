import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';
import { Department } from '../entity/department.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,

    @Inject('DEPARTMENT_REPOSITORY')
    private departmentRepository: Repository<Department>,
  ) {}

  async findOne(id: number): Promise<Employee> {
    return await this.employeeRepository.findOne({
      where: { employee_id: id },
    });
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
}
