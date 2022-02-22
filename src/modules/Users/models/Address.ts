import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('adresses')
export class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
