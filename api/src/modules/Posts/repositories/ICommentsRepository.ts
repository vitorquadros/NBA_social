import { Comment } from '../models/Comment';
import { CreateCommentDTO } from './DTOs/CreateCommentDTO';

export interface ICommentsRepository {
  createComment({ text, postId, userId }: CreateCommentDTO): Promise<Comment>;
  // getAllPosts(): Promise<Post[]>;
}
