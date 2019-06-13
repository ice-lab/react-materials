import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class GeneralWidget extends Component {
  static displayName = 'GeneralWidget';

  render() {
    return (
      <IceContainer title="常用功能">
        <Row wrap>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>发布门店商品</span>
            </a>
          </Col>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>发布网店商品</span>
            </a>
          </Col>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>客服系统</span>
            </a>
          </Col>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>分销管理</span>
            </a>
          </Col>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>收入/提现</span>
            </a>
          </Col>
          <Col l="8" xxs="12" className={styles.widgetItem}>
            <a className={styles.widgetLink}>
              <img
                src={require('./images/TB1rDFsopuWBuNjSspnXXX1NVXa-200-200.png')}
                alt=""
                className={styles.widgetImg}
              />
              <span className={styles.widgetName}>帮助中心</span>
            </a>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}


