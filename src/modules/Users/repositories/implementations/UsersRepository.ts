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

  async store({
    username,
    displayName,
    email,
    birthday,
    password,
    nbaTeam,
    avatar,
    cover,
    address
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
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

    await this.repository.save(user);
    return user;
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
