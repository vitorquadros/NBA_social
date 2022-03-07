import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { UserKey } from '../models/UserKey';
import { RegisterUsecase } from '../usecases/RegisterUsecase';
import { v4 as uuid } from 'uuid';
import nodemailer from 'nodemailer';
import { User } from '../../Users/models/User';

export class RegisterController {
  async store(req: Request, res: Response): Promise<Response> {
    const { email, redirectUrl } = req.body;

    const registerUsecase = container.resolve(RegisterUsecase);

    try {
      const user = await registerUsecase.register(email);

      const keysRepository = getRepository(UserKey);
      const key = uuid();
      const userKey = keysRepository.create({ userId: user, key });
      await keysRepository.save(userKey);

      const link = `${redirectUrl.replace(/\/$/, '')}/${key}`;

      const transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '7c73252f3b2703',
          pass: '161a2c0cea727d'
        }
      });

      const message = {
        from: 'noreply@test.com',
        to: 'user@test.com',
        subject: 'Finalize seu cadastro',
        text: `Para finalizar seu cadastro acesse o link: ${link}`,
        html: `<p>Para finalizar seu cadastro acesse o link:</p> <a>${link}</a>`
      };

      transport.sendMail(message, (e) => console.log(e.message));

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { key } = req.params;

    const usersRepository = getRepository(User);

    const user = await usersRepository
      .createQueryBuilder('user')
      .leftJoin('user.keys', 'key')
      .where('key.key = :key', { key })
      .getOne();

    return res.status(200).json({ status: 'ok', data: user });
  }

  // async update(req: Request, res: Response): Promise<Response> {}
}
