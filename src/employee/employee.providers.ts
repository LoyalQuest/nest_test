import { DataSource } from 'typeorm';
import { EmployeeEntity } from '../entity/employee.entity';

export const employeeProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmployeeEntity),
    inject: ['DATA_SOURCE'],
  },
];
