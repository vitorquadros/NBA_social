import { Post } from '../models/Post';
import { CreatePostDTO } from './DTOs/CreatePostDTO';

export interface IPostsRepository {
  createPost({ description, image, ownerId }: CreatePostDTO): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
  getAllPostsByUser(userId: string): Promise<Post[]>;
}
