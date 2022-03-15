import { inject, injectable } from 'tsyringe';
import { Comment } from '../models/Comment';
import { ICommentsRepository } from '../repositories/ICommentsRepository';

type CreateCommentRequest = {
  userId: string;
  postId: string;
  text: string;
  parentCommentId?: string;
};

@injectable()
export class CommentsUsecase {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository
  ) {}

  async createComment({
    userId,
    postId,
    text,
    parentCommentId
  }: CreateCommentRequest): Promise<Comment> {
    const comment = await this.commentsRepository.createComment({
      text,
      postId,
      userId,
      parentCommentId
    });

    return comment;
  }
}
