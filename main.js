const { app, BrowserWindow } = require('electron')
const pruebaExpress = require('./api/app')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
  },
  })
  win.loadURL('http://localhost:3000')
  //win.loadFile('./public/index.html')
  pruebaExpress()
}

app.whenReady().then(() => {
  createWindow()
})
