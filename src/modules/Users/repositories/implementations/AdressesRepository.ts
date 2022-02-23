import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Address } from '../../models/Address';
import { CreateAddressDTO } from '../DTOs/CreateAddressDTO';
import { IAdressesRepository } from '../IAdressesRepository';

@EntityRepository()
export class AdressesRepository implements IAdressesRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({ country, state, city }: CreateAddressDTO): Promise<Address> {
    const address = this.repository.create({ country, state, city });

    await this.repository.save(address);
    return address;
  }
}
