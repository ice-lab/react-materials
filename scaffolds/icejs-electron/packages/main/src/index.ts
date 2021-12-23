import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const isDevelopment = import.meta.env.DEV;

async function createWindow() {
  const mainWindow = new BrowserWindow({
    show: false, // Use 'ready-to-show' event to show window
    webPreferences: {
      // preload: join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show();

    if (isDevelopment) {
      mainWindow?.webContents.openDevTools();
    }
  });

  const { RENDERER_DEV_SERVER_URL } = process.env;

  const pageUrl = isDevelopment && RENDERER_DEV_SERVER_URL 
    ? RENDERER_DEV_SERVER_URL
    : new URL(join(__dirname, '../renderer/dist/index.html'), 'file://' + __dirname).toString()
  
  await mainWindow.loadURL(pageUrl);
}

app.whenReady()
  .then(createWindow)
  .catch((e) => console.error('Failed to crate window:', e));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// TODO: Auto-updates
if (!isDevelopment) {
  app.whenReady();
}
