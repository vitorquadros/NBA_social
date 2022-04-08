import { User } from '../models/User';
import { UpdateOwnUserDTO } from './DTOs/UpdateOwnUserDTO';

export interface IUsersRepository {
  registerUser(email: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  deleteMe(userId: string): Promise<User>;
  updateMe({
    id,
    birthday,
    nbaTeam,
    avatar,
    city,
    country,
    cover,
    displayName,
    password,
    state,
    username
  }: UpdateOwnUserDTO): Promise<User>;
}
