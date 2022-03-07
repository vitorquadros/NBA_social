import { inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import { User } from '../../Register/models/User';
import { Like } from '../models/Like';
import { Post } from '../models/Post';

type CreateLikeRequest = {
  userId: string;
  postId: string;
};

@injectable()
export class CreateLikeUsecase {
  // constructor(
  //   @inject('PostsRepository')
  //   private postsReopsitory: IPostsRepository
  // ) {}

  async execute({ userId, postId }: CreateLikeRequest): Promise<Like> {
    const repository = getRepository(Like);

    const usersRepository = getRepository(User);
    const postsRepository = getRepository(Post);

    const user = await usersRepository.findOne(userId);
    const post = await postsRepository.findOne(postId);

    const like = repository.create({ user, post });

    await repository.save(like);

    return like;
  }
}
