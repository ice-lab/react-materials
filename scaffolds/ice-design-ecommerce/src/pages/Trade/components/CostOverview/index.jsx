import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Balloon, Icon } from '@alifd/next';
import DonutChart from './DonutChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class CostOverview extends Component {
  static displayName = 'CostOverview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.title}>交易概览</h4>
        <Row>
          <Col l="8">
            <DonutChart />
          </Col>
          <Col l="16">
            <div className={styles.profile}>
              <div className={styles.cell}>
                <div className={styles.head}>
                  <span className={`${styles.circle} ${styles.purple}`}  />
                  <div className={styles.cellTitle}>本月交易额</div>
                  <Balloon
                    trigger={<Icon type="prompt" size="small" />}
                    align="t"
                    closable={false}
                    alignEdge= {false}
                    triggerType="hover"
                    className={styles.balloon }
                  >
                    当前交易额的相关简介
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
                  <div className={styles.cellTitle}>年度交易额</div>
                  <Balloon
                    trigger={<Icon type="prompt" size="small" />}
                    align="t"
                    closable={false}
                    alignEdge={false}
                    triggerType="hover"
                  
                  >
                    年度交易额的相关简介
                  </Balloon>
                </div>
                <div className={styles.body}>
                  <span className={styles.costValue}>923,45</span>
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


