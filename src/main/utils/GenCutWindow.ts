import { BrowserWindow, app, screen } from 'electron';
import path from 'path';

function getSize() {
  const { size, scaleFactor } = screen.getPrimaryDisplay();
  return {
    width: size.width * scaleFactor,
    height: size.height * scaleFactor,
  };
}
function GenCutWindow() {
  this.cutWindow = null;
}
GenCutWindow.prototype.createCutWindow = function () {
  const { width, height } = getSize();
  this.cutWindow = new BrowserWindow({
    width,
    height,
    autoHideMenuBar: true,
    useContentSize: true,
    movable: false,
    frame: false,
    resizable: false,
    hasShadow: false,
    transparent: true,
    fullscreenable: true,
    fullscreen: true,
    simpleFullscreen: true,
    alwaysOnTop: false,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../../.erb/dll/preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  const url = 'http://localhost:1212/';
  this.cutWindow.loadURL(url);
  this.cutWindow.maximize();
  this.cutWindow.setFullScreen(true);
};

GenCutWindow.prototype.closeCutWindow = function () {
  this.cutWindow && this.cutWindow.hide();
  this.cutWindow = null;
};

const cutWindow = new GenCutWindow();

export default cutWindow;
