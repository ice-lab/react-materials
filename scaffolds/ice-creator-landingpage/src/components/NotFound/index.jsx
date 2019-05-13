import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import './index.scss';
import stylse from './index.module.scss';

export default class BasicNotFound extends Component {
  static displayName = 'BasicNotFound';

  render() {
    return (
      <div className="basic-not-found">
        <IceContainer>
          <div className={`${styles.exceptionContent} exception-content`}>
            <img
              src={require('./images/TB1txw7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
              className={`${styles.image} imgException`}
              alt="页面不存在"
            />
            <div className="prompt">
              <h3 className={`${styles.title} title`}>
                抱歉，你访问的页面不存在
              </h3>
              <p className={`${styles.description} description`}>
                您要找的页面没有找到，请返回<Link to="/">首页</Link>继续浏览
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}


