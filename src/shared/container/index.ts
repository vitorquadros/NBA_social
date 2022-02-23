import { container } from 'tsyringe';
import { IAdressesRepository } from '../../modules/Users/repositories/IAdressesRepository';
import { AdressesRepository } from '../../modules/Users/repositories/implementations/AdressesRepository';
import { UsersRepository } from '../../modules/Users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/Users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository
);
