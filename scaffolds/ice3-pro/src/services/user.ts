import type { LoginParams, LoginResult } from '@/interfaces/user';
import { deleteCookie } from '@/utils/cookie';
import { request } from 'ice';

export async function login(data: LoginParams): Promise<LoginResult> {
  return await request.post('/api/login', data);
}

export async function fetchUserInfo() {
  return await request.get('/api/user');
}

export async function logout() {
  deleteCookie('ice_user_type');
  return await request.post('/api/logout');
}
