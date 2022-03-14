import { User } from '../models/User';

export interface IUsersRepository {
  registerUser(email: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  deleteMe(userId: string): Promise<User>;
}
