import { defineAppConfig } from 'ice';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // Set your configs here.
}));

// MiniappManifest, see https://v3.ice.work/docs/guide/miniapp/app-config
export const miniappManifest = {
  routes: [
    'index',
  ],
};
