import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

enum UserRole {
  USER = 'user',
  VERIFIED = 'verified',
  VERIFIED_PLAYER = 'verified_player',
  ADMIN = 'admin'
}

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  display_name: string;

  @Column()
  birthday: Date;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column()
  nba_team: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address_id: number;

  @Column({ default: 'profile_default.jpg' })
  avatar: string;

  @Column({ default: 'cover_default.jpg' })
  cover: string;

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
