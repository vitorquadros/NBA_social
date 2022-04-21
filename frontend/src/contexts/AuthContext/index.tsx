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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const userLocal = getUserLocalStorage();

    if (userLocal) {
      (async () => {
        setLoading(true);
        try {
          const { data } = await VerifyToken(userLocal.token);

          if (data.valid) {
            setUser({ ...data.user, token: userLocal.token });
          } else {
            return;
          }
        } catch (error) {
          console.log('token inválido ou expirado'); // DEBUG //
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  async function authenticate(email: string, password: string) {
    setLoading(true);
    const { status, data } = await LoginRequest(email, password);

    if (status == 401) throw new Error('Algo deu errado');

    const userPayload = { token: data.data.token, email, ...data.data.user };

    setUser(userPayload);
    setUserlocalStorage({ token: data.data.token, email });
    setLoading(false);
  }

  function logout() {
    setUser(null);
    setUserlocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
