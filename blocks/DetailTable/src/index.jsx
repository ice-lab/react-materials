import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-table">
        <IceContainer title="任务详情">
          <ul style={styles.detailTable}>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>任务标题：</div>
              <div className={styles.detailBody}>集盒家居旗舰店双十一活动</div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>单个任务金额：</div>
              <div className={styles.detailBody}>¥ 1000.00</div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>接单时间：</div>
              <div className={styles.detailBody}>2017-10-18 12:20:07</div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>商家联系方式：</div>
              <div className={styles.detailBody}>15112111213</div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>任务状态：</div>
              <div className={styles.detailBody}>
                <span className={styles.statusProcessing}>进行中</span>
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>收货地址：</div>
              <div className={styles.detailBody}>
                浙江省杭州市余杭区文一西路969号淘宝城
              </div>
            </li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}