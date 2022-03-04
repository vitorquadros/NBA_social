import { inject, injectable } from 'tsyringe';
import { Post } from '../models/Post';
import { IPostsRepository } from '../repositories/IPostsRepository';

type CreatePostRequest = {
  description: string;
  image: string;
  ownerId: string;
};

@injectable()
export class CreatePostUsecase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute({
    description,
    image,
    ownerId
  }: CreatePostRequest): Promise<Post> {
    const post = await this.postsRepository.store({
      description,
      image,
      ownerId
    });

    return post;
  }
}
