import { Outlet } from 'ice';
import styles from './layout.module.css';


export default () => {
  return (
    <div className="icestark-child-app">
      <h3 className={styles.title}>icestark React 微应用</h3>
      <Outlet />
    </div>
  );
};
