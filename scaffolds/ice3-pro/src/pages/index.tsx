import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.title}>
          Hello ice.js 3
        </p>
      </header>
      <div className={styles.body}>
        <button type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn ice.js
          </a>
        </p>
      </div>
    </div>
  );
}
