import { Post } from '../models/Post';
import { CreatePostDTO } from './DTOs/CreatePostDTO';

export interface IPostsRepository {
  store({ description, image, ownerId }: CreatePostDTO): Promise<Post>;
  index(): Promise<Post[]>;
}
