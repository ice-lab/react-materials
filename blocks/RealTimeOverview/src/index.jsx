import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

export default function RealTimeOverview() {
  return (
    <IceContainer title="实时概况">
      <Row wrap>
        <Col l="12" xxs="24">
          <div className={styles.dataItem}>
            <img
              src={require('./images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png')}
              alt=""
              className={styles.dataItemImg}
            />
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>门店销售额(元)</div>
              <div className={styles.unitAmount}>1982.00</div>
              <div className={styles.unitFooter}>昨日：1680.00</div>
            </div>
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>门店支付订单数</div>
              <div className={styles.unitAmount}>80</div>
              <div className={styles.unitFooter}>昨日：60</div>
            </div>
          </div>
        </Col>
        <Col l="12" xxs="24">
          <div className={styles.dataItem}>
            <img
              src={require('./images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png')}
              alt=""
              className={styles.dataItemImg}
            />
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>网店销售额(元)</div>
              <div className={styles.unitAmount}>2381.00</div>
              <div className={styles.unitFooter}>昨日：2123.00</div>
            </div>
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>网店支付订单数</div>
              <div className={styles.unitAmount}>120</div>
              <div className={styles.unitFooter}>昨日：128</div>
            </div>
          </div>
        </Col>
        <Col l="12" xxs="24">
          <div className={styles.dataItem}>
            <img
              src={require('./images/TB1Py4_ceuSBuNjy1XcXXcYjFXa-142-140.png')}
              alt=""
              className={styles.dataItemImg}
            />
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>新增客户数</div>
              <div className={styles.unitAmount}>182</div>
              <div className={styles.unitFooter}>昨日：123</div>
            </div>
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>支付客户数</div>
              <div className={styles.unitAmount}>96</div>
              <div className={styles.unitFooter}>昨日：90</div>
            </div>
          </div>
        </Col>
        <Col l="12" xxs="24">
          <div className={styles.dataItem}>
            <img
              src={require('./images/TB1Ni4_ceuSBuNjy1XcXXcYjFXa-142-140.png')}
              alt=""
              className={styles.dataItemImg}
            />
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>新增会员数</div>
              <div className={styles.unitAmount}>89</div>
              <div className={styles.unitFooter}>昨日：78</div>
            </div>
            <div className={styles.dataItemUnit}>
              <div className={styles.unitTitle}>新增储值金额(元)</div>
              <div className={styles.unitAmount}>568.00</div>
              <div className={styles.unitFooter}>昨日：693.00</div>
            </div>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}
