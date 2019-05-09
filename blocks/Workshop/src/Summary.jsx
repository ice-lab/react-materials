import React from 'react';
import styles from './index.module.scss';
const Summary = (props) => {
  return (
    <div key="summary" className={styles.summary}>
      <div className={styles.num}>{`0${props.num} _`}</div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subTitle}</div>
    </div>
  );
};


export default Summary;
