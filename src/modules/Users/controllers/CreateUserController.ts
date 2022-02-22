import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Controller } from '../../interfaces/Controller';
import { CreaterUserUsecase } from '../usecases/CreateUserUsecase';

export class CreateUserController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      username,
      display_name,
      email,
      birthday,
      password,
      nba_team,
      avatar,
      cover,
      address_id
    } = req.body;

    const createUserUsecase = container.resolve(CreaterUserUsecase);

    try {
      const user = await createUserUsecase.execute({
        username,
        display_name,
        email,
        birthday,
        password,
        nba_team,
        avatar,
        cover,
        address_id
      });

      return res.status(201).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
