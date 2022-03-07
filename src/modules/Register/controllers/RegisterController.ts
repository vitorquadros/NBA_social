import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RegisterUsecase } from '../usecases/RegisterUsecase';

export class RegisterController {
  async index(req: Request, res: Response): Promise<Response> {
    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const users = await registerUsecase.getRegisters();

      return res
        .status(200)
        .json({ status: 'ok', usersCount: users.length, data: users });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { email, redirectUrl } = req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      await registerUsecase.register(email, redirectUrl);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { key } = req.params;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const user = await registerUsecase.getUncompletedRegister(key);

      return res.status(200).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { key, username, displayName, birthday, nbaTeam, password } =
      req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const user = await registerUsecase.completeRegister({
        key,
        username,
        displayName,
        birthday,
        nbaTeam,
        password
      });

      return res.status(200).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
