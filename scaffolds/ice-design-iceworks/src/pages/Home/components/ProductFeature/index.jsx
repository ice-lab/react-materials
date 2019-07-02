import React from 'react';
import styles from './index.module.scss';

export default (props) => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.wrapper}>
        <div className={styles.feature}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.line}>
            <div className={styles.lineHeader} />
          </div>
          <div className={styles.desc}>{props.desc}</div>
        </div>
        <div className={styles.cover}>
          <img
            alt="特点图"
            className={styles.coverImage}
            style={props.img}
            src={props.img.url}
          />
        </div>
      </div>
    </div>
  );
};
