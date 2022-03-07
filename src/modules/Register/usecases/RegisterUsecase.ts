import { inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import { User } from '../../Users/models/User';
// import { IAdressesRepository } from '../repositories/IAdressesRepository';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
export class RegisterUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository // @inject('AdressesRepository') // private adressesRepository: IAdressesRepository
  ) {}

  async register(email: string): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    }

    const user = await this.usersRepository.registerUser(email);

    return user;
  }

  async getUncompletedRegister(key: string) {
    const usersRepository = getRepository(User);

    const user = await usersRepository
      .createQueryBuilder('user')
      .leftJoin('user.keys', 'key')
      .where('key.key = :key', { key })
      .getOne();

    return user;
  }
}
