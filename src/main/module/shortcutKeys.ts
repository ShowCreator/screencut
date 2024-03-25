import { BrowserWindow } from 'electron';
import genCutWindow from '../utils/GenCutWindow';

const { globalShortcut } = require('electron');

class ShortCutKey {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildKeys() {
    globalShortcut.register('CommandOrControl+D', () => {
      genCutWindow.closeCutWindow();
      this.mainWindow.hide();
      genCutWindow.createCutWindow();
      genCutWindow.cutWindow.show();
    });

    globalShortcut.register('Esc', () => {
      genCutWindow.closeCutWindow();
      this.mainWindow.show();
    });
  }
}

export default ShortCutKey;
