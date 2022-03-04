import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../../Users/models/User';
import { Like } from './Like';

@Entity('posts')
export class Post {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'owner_id' })
  user: User;

  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];

  // protected likesCount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // @AfterLoad()
  // getLikesCount() {
  //   this.likesCount = this.likes.length;
  // }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
