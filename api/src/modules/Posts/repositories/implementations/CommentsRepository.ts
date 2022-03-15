import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../../Register/models/User';
import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';
import { CreateCommentDTO } from '../DTOs/CreateCommentDTO';
import { ICommentsRepository } from '../ICommentsRepository';

@EntityRepository()
export class CommentsRepository implements ICommentsRepository {
  private repository: Repository<Comment>;

  constructor() {
    this.repository = getRepository(Comment);
  }

  async createComment({
    text,
    postId,
    userId,
    parentCommentId
  }: CreateCommentDTO): Promise<Comment> {
    const usersRepository = getRepository(User);
    const postsRepository = getRepository(Post);

    const user = await usersRepository.findOne(userId);
    const post = await postsRepository.findOne(postId);

    const comment = this.repository.create({
      text,
      owner: user,
      post
    });

    if (parentCommentId) {
      const parentComment = await this.repository.findOne(parentCommentId);
      this.repository.merge(comment, { parentComment });
    }

    await this.repository.save(comment);
    return comment;
  }

  // async getAllPosts(): Promise<Post[]> {
  //   const posts = await this.repository.find({
  //     relations: ['likes', 'user']
  //   });

  //   return posts;
  // }
}
