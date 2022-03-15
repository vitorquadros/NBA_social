import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CommentsUsecase } from '../usecases/CommentsUsecase';

export class CommentsController {
  async store(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const { userId } = req;
    const { text } = req.body;

    const commentsUsecase = container.resolve(CommentsUsecase);

    try {
      const comment = await commentsUsecase.createComment({
        text,
        postId,
        userId
      });

      return res.status(201).json({ status: 'ok', data: comment });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
