import React from 'react';
import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.wrapper}>
        <div className={styles.feature}>
          <div className={styles.title}>物料自定义接入</div>
          <div className={styles.line}>
            <div className={styles.lineHeader} />
          </div>
          <div className={styles.desc}>
            官方提供海量的物料，覆盖多种业务场景，也支持物料自定义接入，定制物料源
          </div>
        </div>
        <div className={styles.cover}>
          <img
            alt="特点图"
            className={styles.coverImage}
            src={require('./images/TB1gEoLpwmTBuNjy1XbXXaMrVXa-1760-974.png')}
          />
        </div>
      </div>
    </div>
  );
};
