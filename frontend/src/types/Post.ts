import { User } from './User';

export type Like = {
  id: string;
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type Comment = {
  id: string;
  text: string;
  owner: User;
  replys: Reply[];
  parentComment: Comment;
  createdAt: string;
  updatedAt: string;
};

export type Reply = {
  id: string;
  text: string;
  parentComment: Comment;
  owner: User;
  createdAt: string;
  updatedAt: string;
};

export type PostComment = {
  id: string;
  text: string;
  replys: PostReply[];
  parentComment: Comment;
  createdAt: string;
  updatedAt: string;
};

export type PostReply = {
  id: string;
  text: string;
  parentComment: PostComment;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  id: string;
  description: string;
  image: string;
  user: User;
  likes: Like[];
  comments: PostComment[];
  createdAt: string;
  updatedAt: string;
};
