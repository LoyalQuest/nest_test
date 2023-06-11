import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { EmployeeEntity } from './entity/employee.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hr',
  synchronize: false,
  logging: false,
  entities: [EmployeeEntity],
  migrations: [],
  subscribers: [],
});
