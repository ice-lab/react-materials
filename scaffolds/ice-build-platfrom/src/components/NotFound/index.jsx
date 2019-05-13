import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import './NotFound.scss';

export default class NotFound extends Component {
  static displayName = 'NotFound';

  render() {
    return (
      <div className="basic-not-found">
        <IceContainer>
          <div  className="exception-content exceptionContent">
            <img
              src={require('./images/notFound.png')}
              className="image"
              className="imgException"
              alt="页面不存在"
            />
            <div className="prompt">
              <h3 className="title">
                抱歉，你访问的页面不存在
              </h3>
              <p className="description">
                您要找的页面没有找到，请返回<Link to="/">首页</Link>继续浏览
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}

