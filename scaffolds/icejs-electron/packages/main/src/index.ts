import { app, BrowserWindow } from 'electron';
import { join } from 'path';

// TODO: use import.meta.env.MODE to judge
const isDevelopment = true;

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

  // eslint-disable-next-line @iceworks/best-practices/no-http-url
  const pageUrl = 'http://localhost:3333/';

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
