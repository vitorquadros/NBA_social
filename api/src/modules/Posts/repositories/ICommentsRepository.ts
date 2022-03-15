import { Comment } from '../models/Comment';
import { CreateCommentDTO } from './DTOs/CreateCommentDTO';

export interface ICommentsRepository {
  createComment({
    text,
    postId,
    userId,
    parentCommentId
  }: CreateCommentDTO): Promise<Comment>;
  getAllCommentsFromPost(postId: string): Promise<Comment[]>;
}
