import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../Register/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthController {
  async handle(req: Request, res: Response): Promise<Response> {
    const repository = getRepository(User);
    const { email, password } = req.body;

    try {
      const user = await repository.findOne({
        where: { email },
        select: [
          'password',
          'id',
          'username',
          'birthday',
          'avatar',
          'cover',
          'nbaTeam',
          'role',
          'displayName'
        ]
      });

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
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
