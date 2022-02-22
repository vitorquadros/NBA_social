import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Address } from './Address';

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

  @OneToOne(() => Address, (address_id) => address_id.user)
  @JoinColumn() // owns the relation
  address_id: Address;

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
