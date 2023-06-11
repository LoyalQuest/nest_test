import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from '../entity/Employee';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,
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
