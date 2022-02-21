import { getCustomRepository } from 'typeorm';
import { User } from '../models/User';
import { UsersRepository } from '../repositories/implementations/UsersRepository';

type CreateUserRequest = {
  username: string;
  email: string;
  password: string;
};

export class CreaterUserUsecase {
  async execute({
    username,
    email,
    password
  }: CreateUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.create({
      username,
      email,
      password
    });

    return user;
  }
}
