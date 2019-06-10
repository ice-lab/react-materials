import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Icon, Grid } from '@alifd/next';
import styles from './index.module.scss';
const { Row, Col } = Grid;

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`${"asset-info-display"} ${styles.container}`}>
        <Row gutter="20" wrap className={styles.containerContent}>
          <Col xxs="24" s="12">
            <IceContainer className={styles.card}>
              <div className={styles.title}>资产展示</div>
              <div className={styles.assets}>
                <div className={styles.assetItem}>
                  <div className={styles.price}>$46.24</div>
                  <a href="##" className={styles.subItem}>
                    可用额度 <Icon type="help" size="small" />
                  </a>
                </div>
                <div className={styles.assetItem}>
                  <div className={styles.price}>$46.24</div>
                  <a href="##" className={styles.subItem}>
                    现金余额 <Icon type="help" size="small" />
                  </a>
                </div>
                <div
                  className={styles.assetItemRight}
                >
                  <div className={styles.price}>$46.24</div>
                  <a href="##" className={styles.subItem}>
                    信用额度 <Icon type="help" size="small" />
                  </a>
                </div>
              </div>
              <div className={styles.cardItem}>
                <h1 className={styles.subTitle}>优惠卡券</h1>
                <div className={styles.assetsGroup}>
                  <div className={styles.assetItem}>
                    <div className={styles.item}>$100</div>
                    <div className={styles.subItem}>储值卡</div>
                  </div>
                  <div className={styles.assetItem}>
                    <div className={styles.item}>$0</div>
                    <div className={styles.subItem}>优惠券</div>
                  </div>
                  <div
                    className={styles.assetItemRight}
                  >
                    <div className={styles.item}>$3000</div>
                    <div className={styles.subItem}>代金券</div>
                  </div>
                </div>
              </div>
            </IceContainer>
          </Col>
          <Col xxs="24" s="12">
            <IceContainer className={styles.card}>
              <div className={styles.title}>合同发票</div>
              <div
                className={styles.cardItemBottom}
              >
                <h1 className={styles.subTitle}>合同</h1>
                <div className={styles.assetsGroup}>
                  <a href="##" className={styles.assetItem}>
                    <div className={styles.item}>0</div>
                    <div className={styles.subItem}>正式</div>
                  </a>
                  <a
                    href="##"
                    className={styles.assetItemRight}
                  >
                    <div className={styles.item}>1</div>
                    <div className={styles.subItem}>草稿</div>
                  </a>
                </div>
              </div>
              <div className={styles.cardItem}>
                <h1 className={styles.subTitle}>发票</h1>
                <div className={styles.assetsGroup}>
                  <a href="##" className={styles.assetItem}>
                    <div className={styles.item}>$182.13</div>
                    <div className={styles.subItem}>正式</div>
                  </a>
                  <a
                    href="##"
                    className={styles.assetItemRight}
                  >
                    <div className={styles.item}>$0</div>
                    <div className={styles.subItem}>发票</div>
                  </a>
                </div>
              </div>
            </IceContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
