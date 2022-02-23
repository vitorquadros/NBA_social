import { Address } from '../../models/Address';

export interface CreateUserDTO {
  id?: string;
  username: string;
  displayName: string;
  email: string;
  birthday: Date;
  password: string;
  nbaTeam: string;
  avatar: string;
  cover: string;
  address: Address;
}
