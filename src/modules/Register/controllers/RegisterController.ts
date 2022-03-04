import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { UserKey } from '../models/UserKey';
import { RegisterUsecase } from '../usecases/RegisterUsecase';
import { v4 as uuid } from 'uuid';

export class RegisterController {
  async store(req: Request, res: Response): Promise<Response> {
    const { email, redirectUrl } = req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    const user = await registerUsecase.register(email);

    const keysRepository = getRepository(UserKey);
    const key = uuid() + new Date().getTime();
    const userKey = await keysRepository.create({ userId: user, key });
    await keysRepository.save(userKey);

    const link = `${redirectUrl.replace(/\/$/, '')}/${key}`;

    // envio do email
  }

  async show(req: Request, res: Response): Promise<Response> {}

  async update(req: Request, res: Response): Promise<Response> {}
}
