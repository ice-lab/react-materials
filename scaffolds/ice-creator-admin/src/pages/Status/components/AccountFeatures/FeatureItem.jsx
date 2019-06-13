import React, { Component } from 'react';
import { Grid, Message } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

class FeatureItem extends Component {
  handleClick = () => {
    Message.prompt('您暂无权限查看详情，请先申请权限');
  };

  render() {
    const { data } = this.props;
    return (
      <Row
        wrap
        className={styles.wrap}
      >
        <Col l={3} s={4} xxs={24} className={styles.col} >
          <div className={styles.cover}>
            <img
              alt={data.title}
              className={styles.img}
              src={data.icon}
            />
          </div>
        </Col>
        <Col l={11} s={10} xxs={24} className={styles.col}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.desc}>{data.desc}</div>
        </Col>
        <Col l={4} s={4} xxs={24} className={styles.col}>
          <div className={styles.status}>
            {data.status}
          </div>
        </Col>
        <Col l={6} s={6} xxs={24} className={styles.col}>
          <div className={styles.desc}>{data.detail}</div>
          <div>
            <a className={styles.link} onClick={this.handleClick}>
              了解详情
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}



export default FeatureItem;
