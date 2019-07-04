import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function StateItem(props) {
  const { data } = props;
  return (
    <Row
      wrap
      className={styles.wrap}
    >
      <Col className={styles.col} l={3} s={4} xxs={24}>
        <div className={styles.cover}>
          <img
            alt={data.title}
            className={styles.img}
            src={data.icon}
          />
        </div>
      </Col>
      <Col className={styles.col} l={17} s={14} xxs={24}>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.desc}>{data.desc}</div>
      </Col>
      <Col className={styles.col} l={4} s={4} xxs={24}>
        <div className={styles.status}>
          {data.status}
        </div>
      </Col>
    </Row>
  );
}
