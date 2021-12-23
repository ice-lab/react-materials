import { build } from 'vite';
import { spawn } from 'child_process';
import electronPath from 'electron';

function getWatcher({ name, configFile, writeBundle }) {
  return build({
    mode: 'development',
    build: {
      watch: {},
    },
    configFile,
    plugins: [{ name, writeBundle }],
  });
}

function setupMainPackageWatcher(viteDevServer) {
  // const protocol = `http${viteDevServer.config.server.https ? 's' : ''}:`;
  // const host = viteDevServer.config.server.host || 'localhost';
  // const { port } = viteDevServer.config.server; // Vite searches for and occupies the first free port: 3000, 3001, 3002 and so on
  // const path = '/';
  // process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}${path}`;

  let spawnProcess = null;

  return getWatcher({
    name: 'reload-app-on-main-package-change',
    configFile: 'vite.config.js',
    writeBundle() {
      if (spawnProcess !== null) {
        spawnProcess.kill('SIGINT');
        spawnProcess = null;
      }

      spawnProcess = spawn(String(electronPath), ['.']);

      spawnProcess.stdout.on('data', (d) => {
        const data = d.toString().trim();
        if (!data) return;
        console.error(data);
      });

      spawnProcess.stderr.on('data', (d) => {
        const data = d.toString().trim();
        if (!data) return;
        console.error(data);
      });
    },
  });
}

(async function () {
  try {
    await setupMainPackageWatcher();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
