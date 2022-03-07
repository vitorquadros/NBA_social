import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../../Users/models/User';

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
    const users = await this.repository.find({ relations: ['address'] });

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
}
