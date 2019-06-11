import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import styles from   './index.module.scss';

export default class NotFound extends Component {
  static displayName = 'NotFound';

  render() {
    return (
      <div className={styles.basicnotfound}>
        <IceContainer>
          <div  className={styles.exceptioncontent}>
            <img
              src={require('./images/TB1txw7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
              className="imgException"
              alt="页面不存在"
            />
            <div className={styles.prompt}>
              <h3 className={styles.title}>
                抱歉，你访问的页面不存在
              </h3>
              <p  className={styles.description}>
                您要找的页面没有找到，请返回
                <a href="#">首页</a>
                继续浏览
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}
