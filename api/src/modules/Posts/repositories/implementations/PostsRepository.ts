import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../../Register/models/User';
import { Post } from '../../models/Post';
import { CreatePostDTO } from '../DTOs/CreatePostDTO';
import { IPostsRepository } from '../IPostsRepository';

@EntityRepository()
export class PostsRepository implements IPostsRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = getRepository(Post);
  }

  async createPost({
    description,
    image,
    ownerId
  }: CreatePostDTO): Promise<Post> {
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

  async getAllPosts(): Promise<Post[]> {
    const posts = await this.repository.find({
      relations: [
        'likes',
        'likes.user',
        'comments',
        'comments.replys',
        'comments.parentComment',
        'user'
      ],
      order: {
        createdAt: 'DESC'
      }
    });

    return posts;
  }
}
