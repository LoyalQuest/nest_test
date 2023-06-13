import { Repository } from 'typeorm';
import { Department } from '../entity/department.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../entity/employee.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private departmentRepository: Repository<Department>,

    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  async findOne(id: number): Promise<Department> {
    return await this.departmentRepository.findOne({
      where: { departments_id: id },
    });
  }

  async raiseDepartment(id: number, percentage: number) {
    const targetEmployees = await this.employeeRepository.find({
      where: { department_id: id },
    });
    targetEmployees.forEach((employee) => {
      employee.salary += (employee.salary / 100) * percentage;
    });
    return await this.employeeRepository.save(targetEmployees);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }
}
