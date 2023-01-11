import { defineConfig } from '@ice/app';
import icestark from '@ice/plugin-icestark';
import fusion from '@ice/plugin-fusion';

export default defineConfig(() => ({
  ssr: false,
  ssg: false,
  plugins: [
    fusion({
      themePackage: '@alifd/theme-design-pro',
      theme: {
        'css-prefix': 'next-icestark-',
      },
    }),
    icestark({ type: 'framework' }),
  ],
}));
