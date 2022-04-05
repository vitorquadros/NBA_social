import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserlocalStorage,
  VerifyToken
} from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const userLocal = getUserLocalStorage();

    if (userLocal) {
      (async () => {
        try {
          const { data } = await VerifyToken(userLocal.token);

          if (data.valid) {
            setUser(data.user);
          } else {
            return;
          }
        } catch (error) {
          console.log('token inválido ou expirado'); // DEBUG
        }
      })();
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const { status, data } = await LoginRequest(email, password);

    if (status == 401) throw new Error('Algo deu errado');

    const userPayload = { token: data.data.token, email, ...data.data.user };

    setUser(userPayload);
    setUserlocalStorage({ token: data.data.token, email });
  }

  function logout() {
    setUser(null);
    setUserlocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
