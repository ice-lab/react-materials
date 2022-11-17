import { defineConfig } from '@ice/app';
import request from '@ice/plugin-request';
import store from '@ice/plugin-store';
import auth from '@ice/plugin-auth';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig({
  plugins: [
    request(),
    store(),
    auth(),
  ],
  server: {
    bundle: true,
    format: 'cjs',
  },
});
