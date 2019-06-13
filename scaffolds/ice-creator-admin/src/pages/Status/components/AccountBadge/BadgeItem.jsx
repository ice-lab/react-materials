import React, { PureComponent } from 'react';
import { Grid, Message } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

class BadgeItem extends PureComponent {
  handleClick = (info) => {
    Message.prompt(`您暂无权限${info}，请先申请权限`);
  };

  render() {
    const { data } = this.props;
    return (
      <Row wrap className={styles.wrap}>
        <Col className={styles.col} l={3} s={4} xxs={24}>
          <div className={styles.cover}>
            <img className={styles.img} src={data.icon} alt="" />
          </div>
        </Col>
        <Col className={styles.col} l={11} s={10} xxs={24}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.desc}>{data.desc}</div>
        </Col>
        <Col className={styles.col} l={4} s={4} xxs={24}>
          <div className={styles.status}>{data.status}</div>
        </Col>
        <Col className={styles.col} l={6} s={6} xxs={24}>
          <div className={styles.desc}>{data.detail}</div>
          <div>
            <a onClick={() => this.handleClick('查看详情')} className={styles.link}>
              查看详情
            </a>
            <a
              onClick={() => this.handleClick('查看历史记录')}
              className={styles.link}
            >
              历史记录
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}



export default BadgeItem;
