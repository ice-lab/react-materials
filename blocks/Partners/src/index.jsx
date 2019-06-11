import React, { Component } from 'react';
import { Grid } from '@alifd/next';

import styles from  './index.module.scss'
import MOCK_DATA from './data';

const { Row, Col } = Grid;

export default class Partners extends Component {
  static displayName = 'Partners';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.bigTitle}>PARTNERS</div>
          <div className={styles.subTitle}>合作伙伴</div>
          <div className={styles.partnerBox}>
            {MOCK_DATA.map((item, index) => {
              return (
                <div className={styles.partnerItem} key={index}>
                  <div className={styles.partnerTitle}>{item.title}</div>
                  <Row wrap gutter={20}>
                    {item.partners.map((src, key) => {
                      return (
                        <Col l="4" key={key}>
                          <img src={src} alt="" className={styles.logo} />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
