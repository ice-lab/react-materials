import React from 'react';
import style from './index.module.scss';

export default function AblityItems() {
  return (
    <div className={style.hyAbilityStyles}>
      <div className={style.hyAbilityItemStyle}>
        <img
          alt=""
          src={require('./images/aWimbMGxabytxrRqcnEU.svg')}
          className={style.hyAbilityItemImgStyle}
        />
        <h3 className={style.hyAbilityItemTitleStyle}>能力输出</h3>
        <p className={style.hyAbilityItemSubtitleStyle}>
          支付、实名、信用、理财、大数据
        </p>
      </div>

      <div className={style.hyAbilityItemStyle}>
        <img
          alt=""
          src={require('./images/neNAdNbBxUbWpbUQIsJA.svg')}
          className={style.hyAbilityItemImgStyle}
        />
        <h3 className={style.hyAbilityItemTitleStyle}>政策扶持</h3>
        <p className={style.hyAbilityItemSubtitleStyle}>
          物料、返佣、品牌支持、运营收益
        </p>
      </div>

      <div className={style.hyAbilityItemStyle}>
        <img
          alt=""
          src={require('./images/SsStefBxcUWayMyktAwz.svg')}
          className={style.hyAbilityItemImgStyle}
        />
        <h3 className={style.hyAbilityItemTitleStyle}>资源整合</h3>
        <p className={style.hyAbilityItemSubtitleStyle}>
          门禁停车、智能家居、生活服务
        </p>
      </div>
    </div>
  );
}
