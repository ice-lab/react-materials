import React from 'react';
import style from './index.module.scss';

export default function IntroBanner() {
  return (
    <div className={style.introBannerWrapStyles}>
      <img
        className={style.introBannerImgStyles}
        src={require('./images/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg')}
        alt=""
      />
      <div
        className={style.introBannerImgMaskStyles}
      />
      <div className={style.introBannerTextStyles}>
        <h2
          className={style.introBannerTitleStyles}
        >
          智慧社区，未来生活
        </h2>
        <p
          className={style.introBannerSubtitleStyles}
        >
          输出支付，账户体系，信用金融，电商，采购，文化公益和大数据等能力和资源，助力社区物业通过提升信息化、智能化水平，改善物业管理水平和服务品质，推动建设便利舒适、安全和谐的智慧社区
        </p>
      </div>
    </div>
  );
}
