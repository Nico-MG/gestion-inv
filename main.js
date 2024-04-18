const { app, BrowserWindow } = require('electron')
const pruebaExpress = require('./api/app')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  win.loadURL('http://localhost:3000')
  pruebaExpress()
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});
