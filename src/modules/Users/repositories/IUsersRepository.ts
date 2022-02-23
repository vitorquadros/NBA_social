import { User } from '../models/User';
import { CreateUserDTO } from './DTOs/CreateUserDTO';

export interface IUsersRepository {
  store({
    username,
    displayName,
    email,
    birthday,
    password,
    nbaTeam,
    avatar,
    cover,
    address
  }: CreateUserDTO): Promise<User>;
  index(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
}
