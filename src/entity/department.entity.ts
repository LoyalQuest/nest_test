import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryColumn()
  departments_id: number;

  @Column({ nullable: false })
  department_name: string;

  @Column({ nullable: true })
  manager_id: number;

  @Column({ nullable: false })
  location_id: number;
}
