import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import MOCK_DATA from './data';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class GuestList extends Component {
  static displayName = 'GuestList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>大会嘉宾</div>
        <div className={styles.line} />
        <p className={styles.desc}>持续更新中</p>
        <div className={styles.content}>
          <Row wrap gutter={20}>
            {MOCK_DATA.map((item, index) => {
              return (
                <Col xl="3" l="4" m="6" xs="12" key={index}>
                  <div className={styles.box}>
                    <img src={item.avatar} alt="" className={styles.avatar} />
                    <div className={styles.info}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.job}>{item.job}</div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

