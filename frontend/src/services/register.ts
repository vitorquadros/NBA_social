import { Api } from './api';
import { CreateUserRequest } from './types/User';

const baseURL = 'http://localhost:3000/register/';

export async function register(email: string) {
  try {
    await Api.post('users/register', { email, redirectUrl: baseURL });
  } catch (error) {
    return null;
  }
}

export async function getRegister(key: string) {
  try {
    const request = await Api.get(`users/register/${key}`);

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function completeRegister(user: CreateUserRequest) {
  try {
    await Api.put('users/register', user);
    console.log('ok'); // DEBUG
    return;
  } catch (error) {
    return null;
  }
}
