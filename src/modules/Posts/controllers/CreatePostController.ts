import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUsecase } from '../usecases/CreatePostUsecase';

export class CreatePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description, image } = req.body;
    const { userId } = req;

    const createPostUsecase = container.resolve(CreatePostUsecase);

    try {
      await createPostUsecase.execute({
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
