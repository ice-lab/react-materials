import React, { Component } from 'react';
import style from './index.module.scss';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`intro-banner-wrap ${style.introBannerWrapStyles}`}>
        <img
          className={`intro-banner-img ${style.introBannerImgStyles}`}
          src={require('./images/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg')}
          alt=""
        />
        <div
          className={`intro-banner-img-mask ${style.introBannerImgMaskStyles}`}
        />
        <div className={`intro-banner-text ${style.introBannerTextStyles}`}>
          <h2
            className={`intro-banner-title ${style.introBannerTitleStyles}`}
          >
            智慧社区，未来生活
          </h2>
          <p
            className={`intro-banner-subtitle ${style.introBannerSubtitleStyles}`}
          >
            输出支付，账户体系，信用金融，电商，采购，文化公益和大数据等能力和资源，助力社区物业通过提升信息化、智能化水平，改善物业管理水平和服务品质，推动建设便利舒适、安全和谐的智慧社区
          </p>
        </div>
      </div>
    );
  }
}

