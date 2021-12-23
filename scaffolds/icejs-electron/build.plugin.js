const { build } = require('vite');
const { spawn } = require('child_process');
const electronPath = require('electron');
const { join } = require('path');

module.exports = ({ onHook }) => {
  onHook('after.start.devServer', async ({ devServer }) => {
    const protocol = `http${devServer.config.server.https ? 's' : ''}:`;
    const host = 'localhost';
    const { port } = devServer.config.server;
    const RENDERER_DEV_SERVER_URL = `${protocol}//${host}:${port}/`;

    try {
      await setupMainPackageWatcher(RENDERER_DEV_SERVER_URL);
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

function setupMainPackageWatcher(rendererDevServerUrl) {
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
          RENDERER_DEV_SERVER_URL: rendererDevServerUrl
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