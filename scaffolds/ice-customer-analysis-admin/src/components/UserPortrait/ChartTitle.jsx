/* eslint no-mixed-operators:0 */
import React from 'react';
import styles from './index.module.scss';

export default function ChartTitle(props) {
  return (
    <h5 style={{ ...props.style }} className={styles.title}>
      <span className={styles.dot} />
      {props.title}
    </h5>
  );
}
