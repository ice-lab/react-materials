import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './BasicException.scss';

export default class BasicException extends Component {
  static displayName = 'BasicException';
  render() {
    return (
      <div>
        <IceContainer>
          <div className="exceptionContent">
            <img
              src={require('./images/TB1w4M7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
              className="imgException"
              alt="服务器出错"
            />
            <div className='content'>
              <h3 className="title">
                抱歉，服务器出错了
              </h3>
              <p className="description">
                服务器出错了，请重新刷新页面或返回<a href="#">首页</a>
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}
