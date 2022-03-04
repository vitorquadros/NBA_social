import { Address } from '../../Users/models/Address';
import { CreateAddressDTO } from './DTOs/CreateAddressDTO';

export interface IAdressesRepository {
  store({ country, state, city }: CreateAddressDTO): Promise<Address>;
}
