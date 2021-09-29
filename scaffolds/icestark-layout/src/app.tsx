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
        url: [
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/build/js/index.js',
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/build/css/index.css',
        ],
      }, {
        path: '/waiter',
        title: '小二平台',
        sandbox: true,
        url: [
          // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',
        ],
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
