import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <view className={styles.app}>
      <view className={styles.appHeader}>
        <image src={logo} className={styles.logo} />
        <text className={styles.title}>
          Hello ICE 3
        </text>
      </view>
      <view className={styles.body}>
        <button type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
      </view>
    </view>
  );
}
