import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PostsUsecase } from '../usecases/PostsUsecase';

export class PostsController {
  async index(req: Request, res: Response): Promise<Response> {
    const postsUsecase = container.resolve(PostsUsecase);

    try {
      const posts = await postsUsecase.getAllPosts();

      return res
        .status(201)
        .json({ status: 'ok', postsCount: posts.length, data: posts });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { description, image } = req.body;
    const { userId } = req;

    const postsUsecase = container.resolve(PostsUsecase);

    try {
      await postsUsecase.createPost({
        description,
        image,
        ownerId: userId
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
