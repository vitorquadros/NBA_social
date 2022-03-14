import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Address } from '../../models/Address';

import { User } from '../../models/User';

import { IUsersRepository } from '../IUsersRepository';

@EntityRepository()
export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async registerUser(email: string): Promise<User> {
    const user = this.repository.create({
      email
    });

    await this.repository.save(user);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.repository.find({
      relations: ['address', 'posts']
    });

    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }

  async deleteMe(userId: string): Promise<User> {
    const user = await this.repository.findOne(userId, {
      relations: ['address']
    });
    const addressRepository = getRepository(Address);
    const address = await addressRepository.findOne(user.address.id);
    await addressRepository.remove(address);

    const result = await this.repository.remove(user);

    return result;
  }
}
