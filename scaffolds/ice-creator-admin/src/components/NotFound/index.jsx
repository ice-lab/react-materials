import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import './index.module.scss';

export default class Index extends Component {
  static displayName = 'Index';

  render() {
    return (
      <div className="basic-not-found">
        <IceContainer>
          <div className="exception-content exceptionContent">
            <img
              src="https://img.alicdn.com/tfs/TB1txw7bNrI8KJjy0FpXXb5hVXa-260-260.png"
              className="imgException image"
              alt="页面不存在"
            />
            <div className="prompt">
              <h3  className="title titleH3">
                抱歉，你访问的页面不存在
              </h3>
              <p className="description descriptionPage">
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
}


