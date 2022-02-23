import { inject, injectable } from 'tsyringe';
import { Address } from '../models/Address';
import { User } from '../models/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

type CreateUserRequest = {
  username: string;
  displayName: string;
  email: string;
  birthday: Date;
  password: string;
  nbaTeam: string;
  avatar: string;
  cover: string;
  address: Address;
};

@injectable()
export class CreaterUserUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    username,
    displayName,
    email,
    birthday,
    password,
    nbaTeam,
    avatar,
    cover,
    address
  }: CreateUserRequest): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    } else if (await this.usersRepository.findByUsername(username)) {
      throw new Error('Username already exists');
    }

    const user = await this.usersRepository.create({
      username,
      displayName,
      email,
      birthday,
      password,
      nbaTeam,
      avatar,
      cover,
      address
    });

    return user;
  }
}
