import { defineAppConfig, history } from 'ice';
import { getCookie } from '@/utils/cookie';
import { fetchUserInfo } from './services/user';
import { defineAuthConfig } from '@ice/plugin-auth/esm/types';
import { defineStoreConfig } from '@ice/plugin-store/esm/types';
import type { LoginResult } from './interfaces/user';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig({
  // Set your configs here.
});

export const auth = defineAuthConfig(async (appData) => {
  const { userType } = appData;
  return {
    initialAuth: {
      admin: userType === 'admin',
      user: userType === 'user',
    },
  };
});

export const store = defineStoreConfig(async (appData) => {
  const { userInfo } = appData;
  return {
    initialStates: {
      user: {
        ...userInfo
      }
    }
  }
});

export const getAppData = async () => {
  const userType = getCookie('ice_userType') as LoginResult['userType'];

  const getUserInfo = async () => {
    try {
      const userInfo = await fetchUserInfo(userType);
      return userInfo;
    } catch (error) {
      history?.push(`/login?redirect=${window.location.pathname}`);
    }
    return undefined;
  };

  // 不是登录页面，获取用户信息
  if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
    const userInfo = await getUserInfo();
    return {
      userInfo,
      userType,
    }
  }

  return {}
}
