import { inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { v4 as uuid } from 'uuid';
import nodemailer from 'nodemailer';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { UserKey } from '../models/UserKey';
import { IAdressesRepository } from '../repositories/IAdressesRepository';

interface UpdateRequest {
  key: string;
  username: string;
  displayName: string;
  birthday: Date;
  nbaTeam: string;
  password: string;
  avatar?: string;
  country?: string;
  state?: string;
  city?: string;
}

interface UpdateOwnUserRequest {
  id: string;
  displayName?: string;
  username?: string;
  bio?: string;
  nbaTeam: string;
  birthday: string;
  password?: string;
  avatar?: string;
  cover?: string;
  country?: string;
  state?: string;
  city?: string;
}

@injectable()
export class RegisterUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository
  ) {}

  async getRegisters(): Promise<User[]> {
    const users = await this.usersRepository.getAllUsers();

    return users;
  }

  async register(email: string, redirectUrl: string): Promise<User> {
    if (await this.usersRepository.findByEmail(email)) {
      throw new Error('Email already exists');
    }

    const user = await this.usersRepository.registerUser(email);

    const keysRepository = getRepository(UserKey);
    const key = uuid();
    const userKey = keysRepository.create({ userId: user, key });
    await keysRepository.save(userKey);

    const link = `${redirectUrl.replace(/\/$/, '')}/${key}`;

    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '7c73252f3b2703',
        pass: '161a2c0cea727d'
      }
    });

    const message = {
      from: 'noreply@test.com',
      to: 'user@test.com',
      subject: 'Finalize seu cadastro',
      text: `Para finalizar seu cadastro acesse o link: ${link}`,
      html: `<p>Para finalizar seu cadastro <a href="${link}">clique aqui</a> ou acesse o link:</p> <a>${link}</a>`
    };

    transport.sendMail(message, (e) => console.log(e.message));

    return user;
  }

  async getUncompletedRegister(key: string) {
    const usersRepository = getRepository(User);

    const user = await usersRepository
      .createQueryBuilder('user')
      .leftJoin('user.keys', 'key')
      .where('key.key = :key', { key })
      .getOne();

    if (!user) throw new Error('Invalid key');

    return user;
  }

  async completeRegister({
    key,
    username,
    displayName,
    birthday,
    nbaTeam,
    password,
    avatar,
    country,
    state,
    city
  }: UpdateRequest) {
    const keysRepository = getRepository(UserKey);
    const usersRepository = getRepository(User);

    const userAlreadyExists = await this.usersRepository.findByUsername(
      username
    );

    if (userAlreadyExists) throw new Error('Username already exists');

    const address = await this.adressesRepository.createAddress({
      country,
      state,
      city
    });

    const user = await this.getUncompletedRegister(key);

    if (!user) throw new Error('Invalid key');

    usersRepository.merge(
      user,
      { username },
      { displayName },
      { birthday },
      { avatar },
      { nbaTeam },
      { password },
      { address }
    );

    await usersRepository.save(user);
    await keysRepository.delete({ key });
  }

  async deleteOwnUser(userId: string) {
    try {
      const result = await this.usersRepository.deleteMe(userId);

      return result;
    } catch {
      throw new Error('User not found');
    }
  }

  async updateOwnUser({
    id,
    birthday,
    nbaTeam,
    avatar,
    city,
    country,
    cover,
    displayName,
    bio,
    password,
    state,
    username
  }: UpdateOwnUserRequest) {
    const user = await this.usersRepository.updateMe({
      id,
      birthday,
      nbaTeam,
      bio,
      avatar,
      city,
      country,
      cover,
      displayName,
      password,
      state,
      username
    });

    if (!user) throw new Error('Something went wrong');

    return user;
  }
}
