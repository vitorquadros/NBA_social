import { User } from '../models/User';
import { CreateUserDTO } from './DTOs/CreateUserDTO';

export interface IUsersRepository {
  create({ username, email, password }: CreateUserDTO): Promise<User>;
}
