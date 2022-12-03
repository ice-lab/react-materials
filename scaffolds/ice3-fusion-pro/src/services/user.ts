import type { LoginParams, LoginResult } from '@/interfaces/user';

const waitTime = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export async function login(data: LoginParams): Promise<LoginResult> {
  // return await request.post('/login', data);
  const { username, password } = data;
  await waitTime();
  if (username === 'admin' && password === 'ice') {
    return {
      success: true,
      userType: 'admin',
    };
  }
  if (username === 'user' && password === 'ice') {
    return {
      success: true,
      userType: 'user',
    };
  }

  return {
    success: false,
    userType: 'guest',
  };
}

export async function fetchUserInfo() {
  // return await request.get('/user');
  return {
    name: 'ICE',
    avatar: 'https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png',
    userid: '00000001',
    userType: 'admin',
  };
}

export async function logout() {
  // return await request.post('/logout');
}
