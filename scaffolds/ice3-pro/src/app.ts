import { defineAppConfig, history } from 'ice';
import { fetchUserInfo } from './services/user';
import { defineAuthConfig } from '@ice/plugin-auth/esm/types';
import { defineStoreConfig } from '@ice/plugin-store/esm/types';

// App config, see https://v3.ice.work/docs/guide/basic/app
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

  // 不是登录页面，获取用户信息
  if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
    const userInfo = await getUserInfo();
    return {
      userInfo,
    }
  }

  return {}
}
