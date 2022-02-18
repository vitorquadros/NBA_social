import { Router, Request, Response } from 'express';

export const usersRoutes = Router();

const users = [];

usersRoutes.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

usersRoutes.post('/', (req: Request, res: Response) => {
  const { username, email, password, passwordConfirm } = req.body;

  if (!username || !email || !password || !passwordConfirm) {
    return res.status(400).json({ error: 'Missing input data' });
  }

  if (password != passwordConfirm) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const user = {
    username,
    email,
    password,
  };

  users.push(user);

  return res.status(201).json(user);
});
