import { container } from 'tsyringe';
import { PostsRepository } from '../../modules/Posts/repositories/implementations/PostsRepository';
import { IPostsRepository } from '../../modules/Posts/repositories/IPostsRepository';
import { UsersRepository } from '../../modules/Register/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/Register/repositories/IUsersRepository';
import { IAdressesRepository } from '../../modules/Register/repositories/IAdressesRepository';
import { AdressesRepository } from '../../modules/Register/repositories/implementations/AdressesRepository';
import { ICommentsRepository } from '../../modules/Posts/repositories/ICommentsRepository';
import { CommentsRepository } from '../../modules/Posts/repositories/implementations/CommentsRepository';

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

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository
);
