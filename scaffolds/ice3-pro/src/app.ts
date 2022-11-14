import { defineAppConfig, history, GetAppData } from 'ice';
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
        currentUser: userInfo,
      },
    },
  };
});

export const request = defineRequestConfig(() => ({
  baseURL: '/api',
}));

export const getAppData: GetAppData = async () => {
  const userInfo = await getUserInfo();

  return {
    userInfo,
  };
};

async function getUserInfo() {
  try {
    const userInfo = await fetchUserInfo();
    return userInfo;
  } catch (error) {
    history?.push(`/login?redirect=${window.location.pathname}`);
  }
  return undefined;
}
