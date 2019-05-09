import React, { Component } from 'react';
import './index.modules.scss'

export default class ProductFeature extends Component {
  static displayName = 'ProductFeature';

  static defaultProps = {
    title: '项目仪表盘插件化',
    desc:
      '丰富多样的项目信息面板，页面信息，路由信息 依赖管理等，配置专属的Iceworks 界面',
    img: {
      width: 640,
      height: 430,
      url: '//img.alicdn.com/tfs/TB1pPQppv1TBuNjy0FjXXajyXXa-1280-860.png',
    },
  };

  render() {
    return (
      <div className="styleswrapperContainer">
        <div className="styleswrapper">
          <div className="stylesfeature">
            <div className="stylestitle">{this.props.title}</div>
            <div className="stylesline">
              <div className="styleslineHeader" />
            </div>
            <div className="stylesdesc">{this.props.desc}</div>
          </div>
          <div className="stylescover">
            <img
              alt="特点图"
              style={{ ...this.props.img }}
              src={this.props.img.url}
              className="stylescoverImage"
            />
          </div>
        </div>
      </div>
    );
  }
}
