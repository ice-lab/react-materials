import React, { Component } from 'react';
import './index.modules.scss'

export default class productDescription extends Component {
  static displayName = 'productDescription';

  render() {
    return (
      <div className="styleswrapperContainer">
        <div className="stylescover">
          <img
            alt="特点图"
            className="stylescoverImage"
            src="//img.alicdn.com/tfs/TB1Xf7OpuuSBuNjy1XcXXcYjFXa-2334-1092.png"
          />
        </div>
        <div className="styleswrapper">
          <div className="stylesfeature">
            <div className="stylestitle">区块可视化组装</div>
            <div className="stylesline">
              <div className="styleslineHeader" />
            </div>
            <div className="stylesdesc">
              海量物料自由搭配，轻松完成页面组合可视化操作更得心应手
            </div>
          </div>
        </div>
      </div>
    );
  }
}
