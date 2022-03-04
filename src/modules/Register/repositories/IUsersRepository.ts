import { User } from '../../Users/models/User';

export interface IUsersRepository {
  registerUser(email: string): Promise<User>;
  index(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
}
