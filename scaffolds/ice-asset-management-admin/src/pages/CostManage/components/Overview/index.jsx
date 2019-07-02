import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Balloon, Icon } from '@alifd/next';
import DonutChart from './DonutChart';
import styles from './index.module.scss';
const { Row, Col } = Grid;

export default function Overview() {
  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>费用概览</h4>
      <Row>
        <Col l="8">
          <DonutChart />
        </Col>
        <Col l="16">
          <div className={styles.profile}>
            <div className={styles.cell}>
              <div className={styles.head}>
                <span className={`${styles.circle} ${styles.purple }`} />
                <div className={styles.cellTitle}>当日计算费用</div>
                <Balloon
                  trigger={<Icon type="prompt" size="small" />}
                  align="t"
                  closable={false}
                  alignEdge={true}
                  triggerType="hover"
                  className={styles.balloonWidth}
                >
                  当前计算费用的相关简介
                </Balloon>
              </div>
              <div className={styles.body}>
                <span className={styles.costValue}>567.89</span>
                <span className={styles.costUnit}>万元</span>
              </div>
              <div className={styles.footer}>
                <span className={styles.footerText}>环比</span>
                <span className={styles.footerValue}>66.99%</span>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.head}>
                <span className={`${styles.circle} ${styles.green }`} />
                <div className={styles.cellTitle}>当日存储费用</div>
                <Balloon
                  trigger={<Icon type="prompt" size="small" />}
                  align="t"
                  closable={false}
                  alignEdge={true}
                  triggerType="hover"
                  className={styles.balloonWidth}
                >
                  当日存储费用的相关简介
                </Balloon>
              </div>
              <div className={styles.body}>
                <span className={styles.costValue}>123,45</span>
                <span className={styles.costUnit}>万元</span>
              </div>
              <div className={styles.footer}>
                <span className={styles.footerText}>环比</span>
                <span className={styles.footerValue}>18.88%</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

