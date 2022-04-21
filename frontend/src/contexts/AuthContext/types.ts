export interface IUser {
  id?: string;
  email?: string;
  username?: string;
  displayName?: string;
  bio?: string;
  birthday?: string;
  nbaTeam?: string;
  role?: string;
  avatar?: string;
  cover?: string;
  token?: string;
}

export interface IUserLocal {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface IAuthProvider {
  children: JSX.Element;
}
