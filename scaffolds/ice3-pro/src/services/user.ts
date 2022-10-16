import type { LoginParams, LoginResult } from '@/interfaces/user';
import { request } from 'ice';

export async function login(data: LoginParams): Promise<LoginResult> {
  return await request.post('/api/login', data);
}

export async function fetchUserInfo(userType: LoginResult['userType']) {
  return await request.get('/api/user', { params: { userType } });
}
