import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appHistory } from '@ice/stark-app';
import { Button } from '@alifd/next';

import styles from './index.module.css';

export default function Home() {
  useEffect(() => {
    console.log('Home Page mounted');
    return () => {
      console.log('Home Page unmounted');
    };
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="https://gw.alicdn.com/imgextra/i4/O1CN01HbIC0T1q41hcKQCL1_!!6000000005441-55-tps-842-595.svg" className={styles.logo} alt="logo" />
        <p>Hello ice.js Vite mode + icestark + React!</p>
        <p className={styles.links}>
          <a
            className={styles.link}
            href="https://ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn ice.js
          </a>
          {' | '}
          <a
            className={styles.link}
            href="https://micro-frontends.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            icestark Docs
          </a>
        </p>
      </header>
      <br />
      <Link to="/detail">微应用跳转内部路由</Link>
      <br />
      <br />
      <Button
        type="primary"
        onClick={() => {
          appHistory.push('/');
        }}
      >微应用间跳转 1
      </Button>
      <br />
      <br />
      <Button
        type="primary"
        onClick={() => {
          appHistory.push('/waiter');
        }}
      >微应用间跳转 2
      </Button>
    </div>
  );
}
