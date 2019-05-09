import React, { Component } from 'react';
import './index.modules.scss'

export default class PlatformBlackIntro extends Component {
  static displayName = 'PlatformBlackIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="styleswrapper">
        <div className="stylesbody">
          <h2 className="stylestitle">多元化的商业机制</h2>
          <p className="stylestext">
            商品推广佣金，精准转化内容影响力<br />优质内容奖励
            ，为优质内容创作者保驾护航<br />阿里V任务，为你的内容创作能力对接更多潜在客户
          </p>
        </div>
        <div className="stylesextraBody">
          <img
            alt=""
            src={require('./images/TB1opWDSpXXXXbwXFXXXXXXXXXX-1412-436.png')}
            className="stylesimage"
          />
          <div className="stylesextraText">
            <p className="stylesextraTextItemLeft">开放更多内容消费场景</p>
            <p className="stylesextraTextItemCenter">激励优质内容生产</p>
            <p className="stylesextraTextItemRight">连接品牌商家需求</p>
          </div>
        </div>
      </div>
    );
  }
}
