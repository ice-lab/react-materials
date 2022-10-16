import { defineConfig } from '@ice/app';
import antd from '@ice/plugin-antd';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig({
  plugins: [
    antd({
      importStyle: true,
    }),
  ],
  server: {
    bundle: true,
    format: 'cjs',
  }
});
