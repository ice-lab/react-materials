export interface UserInfo {
  name: string;
  avatar: string;
  userid: string;
  userType: 'admin' | 'user';
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResult {
  success?: boolean;
  userType?: 'user' | 'admin' | 'guest';
}
