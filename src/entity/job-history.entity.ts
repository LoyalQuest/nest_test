import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'job_history' })
export class JobHistory {
  @PrimaryColumn()
  employee_id: number;

  @Column({ nullable: false })
  start_date: Date;

  @Column({ nullable: false })
  end_date: Date;

  @Column({ nullable: false })
  job_id: string;

  @Column({ nullable: false })
  department_id: number;
}
