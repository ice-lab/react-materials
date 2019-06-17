import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Balloon, Icon } from '@alifd/next';
import DonutChart from './DonutChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class RevenueChart extends Component {
  render() {
    return (
      <IceContainer title="收入概览">
        <Row>
          <Col l="8">
            <DonutChart />
          </Col>
          <Col l="16">
            <div className={styles.profile}>
              <div className={styles.cell}>
                <div className={styles.head}>
                  <span className={`${styles.circle} ${styles.purple}`} />
                  <div className={styles.cellTitle}>实体店收入</div>
                  <Balloon
                    trigger={<Icon type="prompt" size="small" />}
                    align="t"
                    closable={false}
                    alignEdge
                    triggerType="hover"
                    style={{ width: 300 }}
                  >
                    实体店收入的相关简介
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
                  <span className={`${styles.circle} ${styles.green}`} />
                  <div className={styles.cellTitle}>网上零售收入</div>
                  <Balloon
                    trigger={<Icon type="prompt" size="small" />}
                    align="t"
                    closable={false}
                    alignEdge
                    triggerType="hover"
                    style={{ width: 300 }}
                  >
                    网上零售收入的相关简介
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
}


