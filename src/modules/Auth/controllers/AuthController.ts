import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Controller } from '../../interfaces/Controller';
import { User } from '../../Register/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res
        .status(401)
        .json({ status: 'error', error: 'Email or password incorrect' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ status: 'error', error: 'Email or password incorrect' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    delete user.password;

    return res.json({ status: 'ok', data: { user, token } });
  }
}
