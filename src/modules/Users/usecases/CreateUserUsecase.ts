import { inject, injectable } from 'tsyringe';
import { Address } from '../models/Address';
import { User } from '../models/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

type CreateUserRequest = {
  username: string;
  display_name: string;
  email: string;
  birthday: Date;
  password: string;
  nba_team: string;
  avatar: string;
  cover: string;
  address_id: Address;
};

@injectable()
export class CreaterUserUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    username,
    display_name,
    email,
    birthday,
    password,
    nba_team,
    avatar,
    cover,
    address_id
  }: CreateUserRequest): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    } else if (await this.usersRepository.findByUsername(username)) {
      throw new Error('Username already exists');
    }

    const user = await this.usersRepository.create({
      username,
      display_name,
      email,
      birthday,
      password,
      nba_team,
      avatar,
      cover,
      address_id
    });

    return user;
  }
}
