import { User } from './User';

export type Like = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  id: string;
  description: string;
  image: string;
  user: User;
  likes: Like[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
};
