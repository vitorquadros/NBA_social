import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import { Address } from './Address';
import { Post } from '../../Posts/models/Post';
import { Like } from '../../Posts/models/Like';
import { UserKey } from './UserKey';
import { Comment } from '../../Posts/models/Comment';

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

  @Column({ name: 'display_name' })
  displayName: string;

  @Column()
  birthday: Date;

  @Column()
  bio: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ name: 'nba_team' })
  nbaTeam: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn({ name: 'address_id' }) // owns the relation
  address: Address;

  @Column({ default: 'profile_default.jpg' })
  avatar: string;

  @Column({ default: 'cover_default.jpg' })
  cover: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeUpdate()
  hashPassword() {
    if (this.password) this.password = bcrypt.hashSync(this.password, 8);
  }

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @OneToMany(() => UserKey, (keys) => keys.userId)
  keys: UserKey[];

  @OneToMany(() => Comment, (comments) => comments.owner)
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
