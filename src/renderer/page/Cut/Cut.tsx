import React, { useEffect, useRef, useState } from 'react';
import * as zrender from 'zrender';
import styles from './index.module.scss';

function Cut() {
  const containerRef = useRef();
  const [bgImg, setBgImg] = useState('');

  async function getSource(source) {
    console.log('+++++++++++++++');

    const { thumbnail } = source;
    console.log('thumbnail: ', thumbnail);
    const pngData = await thumbnail.toDataURL();
    console.log('pngData: ++++++++++++', pngData);
    setBgImg(pngData);
  }

  useEffect(() => {
    console.log('window.electron: ', window.electron);

    window.electron.ipcRenderer.sendMessage('SHOW_CUT_SCREEN');
    window.electron.ipcRenderer.on('GET_SCREEN_IMAGE', getSource);
    const zr = zrender.init(containerRef.current!);
    console.log('zr: ', zr);
    const circle = new zrender.Circle({
      shape: {
        cx: 150,
        cy: 50,
        r: 40,
      },
      style: {
        fill: 'none',
        stroke: '#F00',
      },
    });
    zr.add(circle);
  }, []);
  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      Cut1111
    </div>
  );
}

export default Cut;
