import React, { Component } from 'react';
import styles from './index.module.scss';
export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div  className={styles.hyAbilityStyles}>
        <div className="hy-ability-item" className={styles.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/aWimbMGxabytxrRqcnEU.svg')}
            className={styles.hyAbilityItemImgStyle}
          />
          <h3 className={styles.hyAbilityItemTitleStyle}>能力输出</h3>
          <p className={styles.hyAbilityItemSubtitleStyle}>
            支付、实名、信用、理财、大数据
          </p>
        </div>

        <div className="hy-ability-item" className={styles.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/neNAdNbBxUbWpbUQIsJA.svg')}
            className={styles.hyAbilityItemImgStyle}
          />
          <h3 className={styles.hyAbilityItemTitleStyle}>政策扶持</h3>
          <p className={styles.hyAbilityItemSubtitleStyle}>
            物料、返佣、品牌支持、运营收益
          </p>
        </div>

        <div className="hy-ability-item" className={styles.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/SsStefBxcUWayMyktAwz.svg')}
            className={styles.hyAbilityItemImgStyle}
          />
          <h3 className={styles.hyAbilityItemTitleStyle}>资源整合</h3>
          <p className={styles.hyAbilityItemSubtitleStyle}>
            门禁停车、智能家居、生活服务
          </p>
        </div>
      </div>
    );
  }
}

// const style = {
//   hyAbilityStyles: {
//     textAlign: 'center',
//     background: '#fff',
//     padding: '40px 0',
//   },
//   hyAbilityItemStyle: {
//     display: 'inline-block',
//     width: '360px',
//     margin: '35px 0',
//     verticalAlign: 'top',
//   },
//   hyAbilityItemImgStyle: {
//     height: '62px',
//   },
//   hyAbilityItemTitleStyle: {
//     fontSize: '20px',
//     lineHeight: '26px',
//     color: '#333',
//     fontWeight: '400',
//     margin: '18px 0 10px',
//   },
//   hyAbilityItemSubtitleStyle: {
//     fontSize: '16px',
//     color: '#999',
//     lineHeight: '21px',
//   },
// };
