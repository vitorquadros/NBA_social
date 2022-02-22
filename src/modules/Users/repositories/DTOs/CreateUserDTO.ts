import { Address } from '../../models/Address';

export interface CreateUserDTO {
  id?: string;
  username: string;
  display_name: string;
  email: string;
  birthday: Date;
  password: string;
  nba_team: string;
  avatar: string;
  cover: string;
  address_id: Address;
}
