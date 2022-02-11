import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

const users = [];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.post('/users', (req: Request, res: Response) => {
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

app.listen(3333, () => console.log('listening...'));
