import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
export declare class EmployeesService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    getAllEmployees(): Promise<Employee[]>;
}
