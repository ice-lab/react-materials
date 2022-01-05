import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        loadScriptMode: 'import',
        // React app demo: https://github.com/ice-lab/react-materials/tree/master/scaffolds/icestark-child
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/index.html',
      }, {
        path: '/waiter',
        title: '小二平台',
        loadScriptMode: 'import',
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-vue3-vite/index.html',
      }, {
        path: '/angular',
        title: 'Angular',
        sandbox: true,
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular
        entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-common-angular/index.html',
      }];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

runApp(appConfig);
