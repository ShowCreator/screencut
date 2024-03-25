import { app, Tray, Menu, nativeImage } from 'electron';

interface TrayBuilderConfig {
  icon: string;
}

class TrayBuilder {
  private iconPath = '';

  constructor({ icon }: TrayBuilderConfig) {
    this.iconPath = icon;
  }

  buildTray() {
    const icon = nativeImage.createFromPath(this.iconPath);
    const tray = new Tray(icon);
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' },
    ]);
    tray.setContextMenu(contextMenu);
  }
}

export default TrayBuilder;
