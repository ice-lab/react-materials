import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

function BadgeItem({ data }) {
  return (
    <Row
      wrap
      className={styles.row}
    >
      <Col className={styles.col} l={3} s={4} xxs={24}>
        <div>
          <img
            className={styles.firstImg}
            src={data.icon}
            alt="icon"
          />
        </div>
      </Col>
      <Col className={styles.col}  l={11} s={10} xxs={24}>
        <h3 className={styles.titles}>{data.title}</h3>
        <div className={styles.desc}>{data.desc}</div>
      </Col>
      <Col className={styles.col}  l={4} s={4} xxs={24}>
        <div className={styles.status}>
          {data.status}
        </div>
      </Col>
      <Col className={styles.col} l={6} s={6} xxs={24}>
        <div className={styles.desc}>{data.detail}</div>
        <div>
          <a href={data.detailUrl} className={styles.detail}  >
            了解详情
          </a>
          <a href={data.recordUrl} className={styles.history} >
            历史记录
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default BadgeItem;
