import React from 'react';
import style from './index.module.scss';

export default function Index() {
  return (
    <div  className={`${style.introBannerWrapStyles} intro-banner-wrap`}>
      <img
        src={require('./images/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg')}
        className={`${style.introBannerImgStyles} intro-banner-img`}
        alt=""
      />
      <div
        className={`${style.introBannerImgMaskStyles} intro-banner-img-mask`}
      />
      <div className={`${style.introBannerTextStyles} intro-banner-text`}>
        <h2
          className={`${style.introBannerTitleStyles} intro-banner-title`}
        >
          智慧社区，未来生活
        </h2>
        <p
          className={`${style.introBannerSubtitleStyles} intro-banner-subtitle`}
        >
          输出支付，账户体系，信用金融，电商，采购，文化公益和大数据等能力和资源，助力社区物业通过提升信息化、智能化水平，改善物业管理水平和服务品质，推动建设便利舒适、安全和谐的智慧社区
        </p>
      </div>
    </div>
  );
}
