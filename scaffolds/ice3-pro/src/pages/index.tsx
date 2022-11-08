import { defineGetConfig } from 'ice';
import styles from './index.module.css';

export default function Dashboard() {
  return (
    <div className={styles.app}>
      index
    </div>
  );
}

export const getConfig = defineGetConfig(() => {
  return {
    auth: ['admin', 'user'],
  }
})
