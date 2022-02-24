import { Post } from '../models/Post';
import { CreatePostDTO } from './DTOs/CreatePostDTO';

export interface IPostsRepository {
  store({ description, image, user }: CreatePostDTO): Promise<Post>;
}
