import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetPostsUsecase } from '../usecases/GetPostsUsecase';

export class GetPostsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getPostsUsecase = container.resolve(GetPostsUsecase);

    try {
      const posts = await getPostsUsecase.execute();

      return res
        .status(201)
        .json({ status: 'ok', postsCount: posts.length, data: posts });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
