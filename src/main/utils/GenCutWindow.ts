import { BrowserWindow, app, screen } from 'electron';
import path from 'path';

export function getSize() {
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
  console.log('app.isPackaged: ', app.isPackaged);
  console.log('__dirname: ', __dirname);
  console.log(
    'path.join(__dirname ',
    path.join(__dirname, '../../../.erb/dll/preload.js'),
  );

  this.cutWindow = new BrowserWindow({
    width: 800,
    height: 400,
    // autoHideMenuBar: true,
    // useContentSize: true,
    // movable: false,
    // frame: false,
    // resizable: false,
    // hasShadow: false,
    // transparent: true,
    // fullscreenable: true,
    // fullscreen: true,
    // simpleFullscreen: true,
    // alwaysOnTop: false,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../../.erb/dll/preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      // contextIsolation: false,
    },
  });
  const url = 'http://localhost:1212/cut';
  this.cutWindow.loadURL(url);
  // this.cutWindow.maximize();
  // this.cutWindow.setFullScreen(true);
};

GenCutWindow.prototype.closeCutWindow = function () {
  this.cutWindow && this.cutWindow.hide();
  this.cutWindow = null;
};

const cutWindow = new GenCutWindow();

export default cutWindow;
