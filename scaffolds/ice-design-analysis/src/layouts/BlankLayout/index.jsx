import React from 'react';
import styles from './index.module.scss';

export default function BlankLayout(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}
