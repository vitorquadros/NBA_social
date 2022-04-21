import { inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import { User } from '../../Register/models/User';
import { Like } from '../models/Like';
import { Post } from '../models/Post';
import { IPostsRepository } from '../repositories/IPostsRepository';

type CreatePostRequest = {
  description: string;
  image: string;
  ownerId: string;
};

type CreateLikeRequest = {
  userId: string;
  postId: string;
};

@injectable()
export class PostsUsecase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async getAllPosts(): Promise<Post[]> {
    const posts = await this.postsRepository.getAllPosts();

    return posts;
  }

  async getAllPostsByUser(userId: string): Promise<Post[]> {
    const posts = await this.postsRepository.getAllPostsByUser(userId);

    return posts;
  }

  async createPost({
    description,
    image,
    ownerId
  }: CreatePostRequest): Promise<Post> {
    const post = await this.postsRepository.createPost({
      description,
      image,
      ownerId
    });

    return post;
  }

  async createLike({ userId, postId }: CreateLikeRequest): Promise<Like> {
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
