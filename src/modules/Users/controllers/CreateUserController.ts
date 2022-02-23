import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Controller } from '../../interfaces/Controller';
import { CreaterUserUsecase } from '../usecases/CreateUserUsecase';

export class CreateUserController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      username,
      displayName,
      email,
      birthday,
      password,
      nbaTeam,
      avatar,
      cover,
      country,
      state,
      city
    } = req.body;

    const createUserUsecase = container.resolve(CreaterUserUsecase);

    try {
      const user = await createUserUsecase.execute({
        username,
        displayName,
        email,
        birthday,
        password,
        nbaTeam,
        avatar,
        cover,
        country,
        state,
        city
      });

      return res.status(201).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
