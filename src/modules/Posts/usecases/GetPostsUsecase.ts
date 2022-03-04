import { inject, injectable } from 'tsyringe';
import { Post } from '../models/Post';

import { IPostsRepository } from '../repositories/IPostsRepository';


@injectable()
export class GetPostsUsecase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.index();

    return posts;
  }
}
