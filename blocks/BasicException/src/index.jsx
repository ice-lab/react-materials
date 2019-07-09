import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function BasicException() {
  return (
    <div className="basic-exception">
      <IceContainer>
        <div className={styles.exceptionContent}>
          <img
            src={require('./images/TB1w4M7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
            className={styles.imgException}
            alt="服务器出错"
          />
          <div className={styles.content}>
            <h3 className={styles.title}>
              抱歉，服务器出错了
            </h3>
            <p className={styles.description}>
              服务器出错了，请重新刷新页面或返回<a href="#">首页</a>
            </p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}

