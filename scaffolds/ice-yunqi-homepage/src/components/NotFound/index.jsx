import React from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function NotFound() {
  return (
    <div className="basic-not-found">
      <IceContainer>
        <div className={`exception-content ${styles.exceptionContent}`}>
          <img
            src={require('./images/notFound.png')}
            className="imgException"
            alt="页面不存在"
          />
          <div className="prompt">
            <h3 className={`${styles.title} title`} >
              抱歉，你访问的页面不存在
            </h3>
            <p className={`${styles.description} description`} >
              您要找的页面没有找到，请返回
              <Link to="/">首页</Link>
              继续浏览
            </p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}
