import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
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
          <div className={styles.box}>
            <p className={styles.textLabel}>本财年月均增长率(%)</p>
            <h2 className={styles.counterNum}>{data.monthRate}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <p className={styles.textLabel}>本财年月均增长量(pb)</p>
            <h2 className={styles.counterNum}>{data.monthAmount}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <p className={styles.textLabel}>本财年日均增长率(%)</p>
            <h2 className={styles.counterNum}>{data.dayRate}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <p className={styles.textLabel}>本财年日均增长量(pb)</p>
            <h2 className={styles.counterNum}>{data.dayAmount}</h2>
          </div>
        </Col>
      </Row>
    );
  }
}


