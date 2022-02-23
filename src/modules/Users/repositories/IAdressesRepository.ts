import { Address } from '../models/Address';
import { CreateAddressDTO } from './DTOs/CreateAddressDTO';

export interface IAdressesRepository {
  create({ country, state, city }: CreateAddressDTO): Promise<Address>;
}
