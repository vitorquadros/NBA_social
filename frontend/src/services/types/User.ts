export interface CreateUserRequest {
  key: string | undefined;
  username: string;
  displayName: string;
  password: string;
  birthday: string;
  nbaTeam?: string;
  avatar?: string;
}
