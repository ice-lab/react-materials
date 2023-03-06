import { defineConfig } from '@ice/app';
import icestark from '@ice/plugin-icestark';

export default defineConfig(() => ({
  ssg: false,
  // When the child application is registered by url, codeSplitting `page` is recommended.
  codeSplitting: 'page',
  plugins: [
    icestark({ type: 'child' }),
  ],
}));
