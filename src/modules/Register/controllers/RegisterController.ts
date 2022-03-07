import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { UserKey } from '../models/UserKey';
import { RegisterUsecase } from '../usecases/RegisterUsecase';

import { User } from '../../Users/models/User';

export class RegisterController {
  async store(req: Request, res: Response): Promise<Response> {
    const { email, redirectUrl } = req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      await registerUsecase.register(email, redirectUrl);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { key } = req.params;

    const registerUsecase = container.resolve(RegisterUsecase);

    const user = await registerUsecase.getUncompletedRegister(key);

    return res.status(200).json({ status: 'ok', data: user });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { key, username, displayName, birthday, nbaTeam, password } =
      req.body;

    const registerUsecase = container.resolve(RegisterUsecase);
    const keysRepository = getRepository(UserKey);
    const usersRepository = getRepository(User);

    const user = await registerUsecase.getUncompletedRegister(key);

    if (!user) return res.status(400).json({ error: 'Inexistent key' });

    usersRepository.merge(
      user,
      { username },
      { displayName },
      { birthday },
      { nbaTeam },
      { password }
    );

    await usersRepository.save(user);
    await keysRepository.delete({ key });

    return res.status(200).json(user);
  }
}
