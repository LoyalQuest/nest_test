import { Repository } from 'typeorm';
import { Department } from '../entity/department.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private departmentRepository: Repository<Department>,
  ) {}

  async findOne(id: number): Promise<Department> {
    return await this.departmentRepository.findOne({
      where: { deppartments_id: id },
    });
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }
}
