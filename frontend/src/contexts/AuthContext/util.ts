import { Api } from '../../services/api';
import { IUser } from './types';

export function setUserlocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  } else {
    const user = JSON.parse(json);

    return user ?? null;
  }
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('auth', { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
}
