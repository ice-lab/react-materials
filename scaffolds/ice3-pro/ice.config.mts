import { defineConfig } from '@ice/app';
// import antd from '@ice/plugin-antd';
import request from '@ice/plugin-request';
import store from '@ice/plugin-store';
import auth from '@ice/plugin-auth';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig({
  plugins: [
    // antd({
    //   importStyle: true,
    // }),
    request(),
    store(),
    auth(),
  ],
  ssg: false,
  ssr: false,
  dataLoader: false,
});
