import { Api } from '../../services/api';
import { IUserLocal } from './types';

export function setUserlocalStorage(user: IUserLocal | null) {
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
  const response = await Api.post('auth', { email, password });

  return response;
}

export async function VerifyToken(token: string) {
  const response = await Api.post('auth/verify', { token });

  return response;
}
