import { injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import { User } from '../../Register/models/User';
import { Like } from '../models/Like';
import { Post } from '../models/Post';

type CreateLikeRequest = {
  userId: string;
  postId: string;
};

@injectable()
export class LikesUsecase {
  async createLike({ userId, postId }: CreateLikeRequest): Promise<Like> {
    const repository = getRepository(Like);

    const usersRepository = getRepository(User);
    const postsRepository = getRepository(Post);

    const user = await usersRepository.findOne(userId);
    const post = await postsRepository.findOne(postId);

    // const alreadyLiked = await usersRepository
    //   .createQueryBuilder('user')
    //   .leftJoin('user.keys', 'key')
    //   .where('key.key = :key', { key })
    //   .getOne();

    const alreadyLiked = await repository.findOne({ user, post });

    if (alreadyLiked) throw new Error('Post already liked');

    const like = repository.create({ user, post });

    await repository.save(like);

    return like;
  }
}
