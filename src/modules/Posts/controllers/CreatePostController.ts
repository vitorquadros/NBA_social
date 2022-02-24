import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Controller } from '../../interfaces/Controller';
import { CreatePostUsecase } from '../usecases/CreatePostUsecase';

export class CreatePostController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description, image } = req.body;
    const { userId } = req;

    const createPostUsecase = container.resolve(CreatePostUsecase);

    try {
      const post = await createPostUsecase.execute({
        description,
        image,
        ownerId: userId
      });

      return res.status(201).json({ status: 'ok', data: post });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
