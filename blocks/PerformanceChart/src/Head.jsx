import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss'
const { Row, Col } = Grid;

export default class Head extends Component {
  static displayName = 'Head';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Row wrap>
        <Col xxs="12" s="12" l="6">
          <div  className={styles.box}>
            <p className={styles.textLabel}>昨日支付金额(元)</p>
            <h2 className={styles.counterNum}>{data.day}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className={styles.box}>
            <p className={styles.textLabel}>本月已完成(元)</p>
            <h2 className={styles.counterNum}>{data.month}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className={styles.box}>
            <p className={styles.textLabel}>本月目标(元)</p>
            <h2 className={styles.counterNum}>{data.target}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className={styles.box}>
            <p className={styles.textLabel}>完成进度(%)</p>
            <h2 className={styles.counterNum}>{data.percent}</h2>
          </div>
        </Col>
      </Row>
    );
  }
}
