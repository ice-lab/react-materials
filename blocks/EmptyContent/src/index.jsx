import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function EmptyContent() {
  return (
    <div className={styles.exceptionContent}>
      <IceContainer>
        <div className={styles.exceptionContent}>
          <img
            src={require('./images/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png')}
            style={styles.image}
            className={styles.imgException}
            alt="empty"
          />
          <div style={styles.prompt}>
            <h3 className={styles.title}>
              页面暂无内容
            </h3>
            <p className={styles.description}>
              抱歉，页面暂无内容，请看看其他页面
            </p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}
