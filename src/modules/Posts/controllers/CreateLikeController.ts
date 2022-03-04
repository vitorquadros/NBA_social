import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Controller } from '../../interfaces/Controller';
import { CreateLikeUsecase } from '../usecases/CreateLikeUsecase';

export class CreateLikeController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const { userId } = req;

    const createLikeUsecase = container.resolve(CreateLikeUsecase);

    try {
      const like = await createLikeUsecase.execute({
        postId,
        userId
      });

      return res.status(201).json({ status: 'ok', data: like });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
