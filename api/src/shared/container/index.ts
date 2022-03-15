import { container } from 'tsyringe';
import { PostsRepository } from '../../modules/Posts/repositories/implementations/PostsRepository';
import { IPostsRepository } from '../../modules/Posts/repositories/IPostsRepository';
import { UsersRepository } from '../../modules/Register/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/Register/repositories/IUsersRepository';
import { IAdressesRepository } from '../../modules/Register/repositories/IAdressesRepository';
import { AdressesRepository } from '../../modules/Register/repositories/implementations/AdressesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository
);
