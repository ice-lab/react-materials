import { defineAppConfig } from 'ice';
import { defineFrameworkConfig } from '@ice/plugin-icestark/types';
import FrameworkLayout from './layouts/FrameworkLayout';
import PageLoading from './components/PageLoading';

export const icestark = defineFrameworkConfig(() => ({
  layout: FrameworkLayout,
  getApps: () => ([{
    path: '/seller',
    title: '商家平台',
    // Important!!
    // Use loadScriptMode: 'fetch' to load child app source code when child app is not build by vite.
    // Visit https://micro-frontends.ice.work/docs/api/ice-stark/#loadscriptmode- to get more details.
    loadScriptMode: 'import',
    entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/index.html',
  }, {
    path: '/waiter',
    title: '小二平台',
    loadScriptMode: 'import',
    entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-vue3-vite/index.html',
  }, {
    path: '/angular',
    title: 'Angular',
    sandbox: true,
    // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular
    entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-common-angular/index.html',
  }]),
  appRouter: {
    LoadingComponent: PageLoading,
  },
}));

export default defineAppConfig(() => ({
  app: {
    rootId: 'app',
  },
}));
