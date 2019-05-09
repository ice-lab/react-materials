import React, { Component } from 'react';
import './index.modules.scss'

export default class ProductFeatureDark extends Component {
  static displayName = 'ProductFeatureDark';

  render() {
    return (
      <div className="styleswrapperContainer">
        <div className="styleswrapper">
          <div className="stylesfeature">
            <div className="stylestitle">物料自定义接入</div>
            <div className="stylesline">
              <div className="styleslineHeader" />
            </div>
            <div className="stylesdesc">
              官方提供海量的物料，覆盖多种业务场景，也支持物料自定义接入，定制物料源
            </div>
          </div>
          <div className="stylescover">
            <img
              alt="特点图"
              className="stylescoverImage"
              src={require('./images/TB1gEoLpwmTBuNjy1XbXXaMrVXa-1760-974.png')}
            />
          </div>
        </div>
      </div>
    );
  }
}
