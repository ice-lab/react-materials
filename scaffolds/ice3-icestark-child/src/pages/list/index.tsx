import { Link } from 'ice';

import styles from './index.module.css';

export default function List() {
  return (
    <div className={styles.container}>
      <h2>列表页面</h2>
      <Link to="/">返回微应用首页</Link>
    </div>
  );
}
