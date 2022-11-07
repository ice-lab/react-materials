import type { LoginParams, LoginResult } from '@/interfaces/user';
import { deleteCookie } from '@/utils/cookie';
import { request } from 'ice';

export async function login(data: LoginParams): Promise<LoginResult> {
  return await request.post('/login', data);
}

export async function fetchUserInfo() {
  return await request.get('/user');
}

export async function logout() {
  deleteCookie('ice_user_type');
  return await request.post('/logout');
}
