import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Employee } from './entity/employee.entity';
import { JobHistory } from './entity/job-history.entity';
import { Department } from './entity/department.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hr',
  synchronize: false,
  logging: false,
  entities: [Employee, JobHistory, Department],
  migrations: [],
  subscribers: [],
});
