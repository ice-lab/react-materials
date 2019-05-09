import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.scss';
export default class NotPermission extends Component {
  static displayName = 'NotPermission';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <IceContainer>
          <div className='exception-content'>
            <img src={require('./images/TB1Gy4Yjv6H8KJjy0FjXXaXepXa-780-780.png')} className='imgException' alt="prmission"/>
            <div className='prompt'>
              <h3 className='title'>
                抱歉，您无权限～
              </h3>
              <p className='description'>
                抱歉，您暂无权限，请看看其他页面
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}
