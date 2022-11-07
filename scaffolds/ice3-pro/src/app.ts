import { defineAppConfig, history } from 'ice';
import { fetchUserInfo } from './services/user';
import { defineAuthConfig } from '@ice/plugin-auth/esm/types';
import { defineStoreConfig } from '@ice/plugin-store/esm/types';
import { defineRequestConfig } from '@ice/plugin-request/esm/types';

export default defineAppConfig({});

export const auth = defineAuthConfig(async (appData) => {
  const { userInfo = {} } = appData;
  return {
    initialAuth: {
      admin: userInfo.userType === 'admin',
      user: userInfo.userType === 'user',
    },
  };
});

export const store = defineStoreConfig(async (appData) => {
  const { userInfo = {} } = appData;
  return {
    initialStates: {
      user: {
        currentUser: userInfo
      }
    }
  }
});

export const request = defineRequestConfig(() => ({
  baseURL: '/api',
}))

export const getAppData = async () => {
  const getUserInfo = async () => {
    try {
      const userInfo = await fetchUserInfo();
      return userInfo;
    } catch (error) {
      // FIXME: history is null in getAppData
      history?.push(`/login?redirect=${window.location.pathname}`);
    }
    return undefined;
  };

  // 兼容 SSR 的情况
  const userInfo = typeof window === 'undefined' ? {
    name: 'Admin',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    userType: 'admin',
  } : await getUserInfo();

  return {
    userInfo,
  }
}
