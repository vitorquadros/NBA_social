import {
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
import { User } from '../../Register/models/User';
import { Comment } from './Comment';
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

  @OneToMany(() => Comment, (comments) => comments.post)
  comments: Comment[];

  // protected likesCount: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
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
