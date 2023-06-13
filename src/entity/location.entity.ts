import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'locations' })
export class Location {
  @PrimaryColumn()
  location_id: number;

  @Column({ nullable: false })
  street_address: string;

  @Column({ nullable: true })
  postal_code: number;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: true })
  state_province: string;

  @Column({ nullable: false })
  country_id: string;
}
