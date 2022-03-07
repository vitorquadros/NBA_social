import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('user_keys')
export class UserKey {
  @PrimaryColumn()
  id: string;

  @Column()
  key: string;

  @ManyToOne(() => User, (user) => user.keys)
  @JoinColumn({ name: 'user_id' })
  userId: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
