import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from '../entity/Employee';

@Injectable()
export class EmployeeService {
    constructor(private readonly employeeRepository: Repository<Employee> ) {}

    async getAllEmployee(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }
}
