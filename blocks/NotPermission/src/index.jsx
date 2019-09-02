import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function NotPermission() {
  return (
    <div className="not-permission" style={styles.notPermission}>
      <IceContainer>
        <div className={styles.exceptionContent}>
          <img
            src={require('./images/TB1Gy4Yjv6H8KJjy0FjXXaXepXa-780-780.png')}
            className={styles.imgException}
            alt="permission"
          />
          <div style={styles.prompt}>
            <h3 className={styles.title}>
              抱歉，您无权限～
            </h3>
            <p className={styles.description}>
              抱歉，您暂无权限，请看看其他页面
            </p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}
