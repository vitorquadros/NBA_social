import { User } from './User';

type Comment = {
  id: string;
  text: string;
  parentComment?: Comment;
  replys?: Comment[];
  createdAt: string;
  updatedAt: string;
};

type Like = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export interface Post {
  id: string;
  description: string;
  image: string;
  likes?: Like[];
  comments?: Comment[];
  user: User;
  createdAt: string;
  updatedAt: string;
}
