import React from 'react';
import styles from './index.module.scss';

const Nofity = ({ style }) => {
  return (
    <div className={styles.notify} style={{ ...style }}>
      <span className={styles.heartbit} />
      <span className={styles.point} />
    </div>
  );
};

export default Nofity;
