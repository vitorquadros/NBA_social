import { inject, injectable } from 'tsyringe';
import { Comment } from '../models/Comment';
import { ICommentsRepository } from '../repositories/ICommentsRepository';

type CreateCommentRequest = {
  userId: string;
  postId: string;
  text: string;
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
    text
  }: CreateCommentRequest): Promise<Comment> {
    const comment = await this.commentsRepository.createComment({
      text,
      postId,
      userId
    });

    // const alreadyLiked = await repository.findOne({ user, post });

    // if (alreadyLiked) throw new Error('Post already liked');

    // const like = repository.create({ user, post });

    // await repository.save(like);

    return comment;
  }
}
