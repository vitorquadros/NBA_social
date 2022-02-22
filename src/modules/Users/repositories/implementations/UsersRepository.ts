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

  async create({
    username,
    display_name,
    email,
    birthday,
    password,
    nba_team,
    avatar,
    cover,
    address_id
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
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
