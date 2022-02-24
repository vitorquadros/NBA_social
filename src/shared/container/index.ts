import { container } from 'tsyringe';
import { PostsRepository } from '../../modules/Posts/repositories/implementations/PostsRepository';
import { IPostsRepository } from '../../modules/Posts/repositories/IPostsRepository';
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

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository
);
