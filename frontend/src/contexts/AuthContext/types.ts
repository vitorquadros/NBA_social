export interface IUser {
  email?: string;
  username?: string;
  displayName?: string;
  birthday?: string;
  nbaTeam?: string;
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
