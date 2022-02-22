import { inject, injectable } from 'tsyringe';
import { User } from '../models/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

type CreateUserRequest = {
  username: string;
  email: string;
  password: string;
};

@injectable()
export class CreaterUserUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    username,
    email,
    password
  }: CreateUserRequest): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    } else if (await this.usersRepository.findByUsername(username)) {
      throw new Error('Username already exists');
    }

    const user = await this.usersRepository.create({
      username,
      email,
      password
    });

    return user;
  }
}
