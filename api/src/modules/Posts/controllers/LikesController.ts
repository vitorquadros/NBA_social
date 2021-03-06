import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LikesUsecase } from '../usecases/LikesUsecase';

export class LikesController {
  async store(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const { userId } = req;

    const likesUsecase = container.resolve(LikesUsecase);

    try {
      const { like, action } = await likesUsecase.createLike({
        postId,
        userId
      });

      return res.status(201).json({ status: 'ok', action, data: like });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async verify(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const { userId } = req;

    const likesUsecase = container.resolve(LikesUsecase);

    try {
      const isLiked = await likesUsecase.verifyLike({
        postId,
        userId
      });

      return res.status(201).json({ status: 'ok', data: { isLiked } });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
