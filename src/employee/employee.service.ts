import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entity/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async findOne(id: number): Promise<EmployeeEntity> {
    return await this.employeeRepository.findOne({
      where: { employee_id: id },
    });
  }

  async findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find();
  }
}
