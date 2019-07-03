import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '标题简介',
    pic: require('./images/img1.png'),
    desc: '这里是相关的功能介绍和描述',
  },
  {
    title: '标题简介',
    pic: require('./images/img3.png'),
    desc: '这这里是相关的功能介绍和描述',
  },
  {
    title: '标题简介',
    pic: require('./images/img4.png'),
    desc: '这这里是相关的功能介绍和描述',
  },
  {
    title: '标题简介',
    pic: require('./images/img2.png'),
    desc: '这这里是相关的功能介绍和描述',
  },
];

export default function Feature() {
  return (
    <div className={styles.container}>
      <Row wrap className={styles.content}>
        {dataSource.map((item, index) => {
          return (
            <Col xxs="12" s="6" l="6" key={index} className={styles.item}>
              <img src={item.pic} className={styles.pic} alt="" />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
