import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.module.scss'

export default class NotFound extends Component {
  static displayName = 'NotFound';

  render() {
    return (
      <div className="basic-not-found">
        <IceContainer>
          <div className="exception-content stylesexceptionContent">
            <img
              src={require('./images/TB1txw7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
              className="imgException"
              alt="页面不存在"
            />
            <div className="prompt">
              <h3 className="title stylestitle">
                抱歉，你访问的页面不存在
              </h3>
              <p className={styles.description} className="description">
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

const styles = {
  description: {
    color: '$color-text1-3',
  },
};
