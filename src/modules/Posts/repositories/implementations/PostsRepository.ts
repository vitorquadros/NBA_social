import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../../Users/models/User';
import { Post } from '../../models/Post';
import { CreatePostDTO } from '../DTOs/CreatePostDTO';
import { IPostsRepository } from '../IPostsRepository';

@EntityRepository()
export class PostsRepository implements IPostsRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = getRepository(Post);
  }

  async store({ description, image, ownerId }: CreatePostDTO): Promise<Post> {
    const post = this.repository.create({
      description,
      image
    });

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(ownerId);

    post.user = user;

    await this.repository.save(post);
    return post;
  }

  async index(): Promise<Post[]> {
    const posts = await this.repository.find({
      relations: ['likes']
    });

    return posts;
  }
}
