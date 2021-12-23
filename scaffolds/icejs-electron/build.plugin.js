const { build } = require('vite');
const { spawn } = require('child_process');
const electronPath = require('electron');
const { join } = require('path');

module.exports = ({ onHook }) => {
  onHook('after.start.devServer', async ({ devServer }) => {
    try {
      await setupPreloadPackageWatcher(devServer);
      await setupMainPackageWatcher(devServer);
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
  });
};

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

function setupPreloadPackageWatcher(devServer) {
  return getWatcher({
    name: 'reload-page-on-preload-package-change',
    configFile: join(__dirname, 'packages', 'preload', 'vite.config.js'),
    writeBundle() {
      devServer.ws.send({
        type: 'full-reload',
      });
    },
  });
};

function setupMainPackageWatcher(devServer) {
  const protocol = `http${devServer.config.server.https ? 's' : ''}:`;
  const host = 'localhost';
  const { port } = devServer.config.server;
  const RENDERER_DEV_SERVER_URL = `${protocol}//${host}:${port}/`;

  let spawnProcess = null;

  return getWatcher({
    name: 'reload-app-on-main-process-change',
    configFile: join(__dirname, 'packages', 'main', 'vite.config.js'),
    writeBundle() {
      if (spawnProcess !== null) {
        spawnProcess.kill('SIGINT');
        spawnProcess = null;
      }

      spawnProcess = spawn(String(electronPath), ['.'], {
        env: {
          ...process.env,
          RENDERER_DEV_SERVER_URL
        }
      });

      spawnProcess.stdout.on('data', (d) => {
        const data = d.toString().trim();
        if (!data) return;
        console.error(data, { timestamp: true });
      });

      spawnProcess.stderr.on('data', (d) => {
        const data = d.toString().trim();
        if (!data) return;
        console.error(data, { timestamp: true });
      });
    },
  });
}