import { defineConfig } from '@ice/app';
import miniapp from '@ice/plugin-miniapp';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig(() => ({
  plugins: [
    miniapp(),
  ],
}));
