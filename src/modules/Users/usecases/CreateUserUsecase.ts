import { inject, injectable } from 'tsyringe';
import { User } from '../models/User';
import { IAdressesRepository } from '../repositories/IAdressesRepository';
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
  country: string;
  state: string;
  city: string;
};

@injectable()
export class CreaterUserUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository
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
    country,
    state,
    city
  }: CreateUserRequest): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    } else if (await this.usersRepository.findByUsername(username)) {
      throw new Error('Username already exists');
    }

    const address = await this.adressesRepository.create({
      country,
      state,
      city
    });

    const user = await this.usersRepository.store({
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
