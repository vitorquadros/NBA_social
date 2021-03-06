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
    const {
      key,
      username,
      displayName,
      birthday,
      nbaTeam,
      password,
      avatar,
      country,
      state,
      city
    } = req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const user = await registerUsecase.completeRegister({
        key,
        username,
        displayName,
        birthday,
        nbaTeam,
        password,
        avatar,
        country,
        state,
        city
      });

      return res.status(200).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { userId } = req;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const result = await registerUsecase.deleteOwnUser(userId);

      return res.status(202).json({ status: 'ok', deleted: result });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async updateMe(req: Request, res: Response): Promise<Response> {
    const {
      displayName,
      username,
      bio,
      nbaTeam,
      birthday,
      password,
      avatar,
      cover
    } = req.body;
    const { userId } = req;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const user = await registerUsecase.updateOwnUser({
        displayName,
        username,
        bio,
        nbaTeam,
        birthday,
        password,
        avatar,
        cover,
        id: userId
      });

      delete user.password;

      return res.status(200).json({ status: 'ok', data: user });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
