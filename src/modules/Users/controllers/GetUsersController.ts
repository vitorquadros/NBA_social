import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Controller } from '../../interfaces/Controller';
import { GetUsersUsecase } from '../usecases/GetUsersUsecase';

export class GetUsersController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const getUsersUsecase = container.resolve(GetUsersUsecase);

    try {
      const users = await getUsersUsecase.execute();

      return res.status(201).json({ status: 'ok', data: users });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
