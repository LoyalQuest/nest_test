import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  phone_number: string;

  @Column({ nullable: false })
  hire_date: Date;

  @Column({ nullable: false })
  job_id: string;

  @Column({ nullable: false })
  salary: number;

  @Column()
  commission_pct: number;

  @Column({ unsigned: true })
  manager_id: number;

  @Column({ unsigned: true })
  department_id: number;
}
