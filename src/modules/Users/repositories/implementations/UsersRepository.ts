import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../models/User';
import { CreateUserDTO } from '../DTOs/CreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

@EntityRepository()
export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ username, email, password }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({ username, email, password });

    await this.repository.save(user);
    return user;
  }
}
