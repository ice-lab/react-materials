import React from 'react';
import { Icon, Grid } from '@alifd/next';
import Filter from './Filter';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const getData = () => {
  return Array.from({ length: 11 }).map((item, index) => {
    return {
      title: `淘宝首页-P${index}`,
      desc: `产品方案 - 共 ${index} 个埋点`,
      creator: '张明',
      leader: '淘小宝',
      time: '2017-06-05 14:03',
    };
  });
};

export default function Index() {
  const data = getData();
  return (
    <div className={styles.container}>
      <Filter />
      <Row wrap gutter="20">
        <Col l="6" xs="12" xxs="24">
          <div className={`${styles.card} ${styles.createScheme }`}>
            <Icon type="add" size="large" className={styles.addIcon} />
            <span>新增测试方案</span>
          </div>
        </Col>
        {data.map((item, index) => {
          return (
            <Col l="6" xs="12" xxs="24" key={index}>
              <div className={styles.card}>
                <div className={styles.head}>
                  <h4 className={styles.title}>{item.title}</h4>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
                <div className={styles.body}>
                  <p className={`${styles.creator} ${styles.info }`}>
                    创建人：
                    {item.creator}
                  </p>
                  <p className={`${styles.leader} ${styles.info }`}>
                    技术负责人：
                    {item.leader}
                  </p>
                  <p className={`${styles.time} ${styles.info }`}>
                    创建时间：
                    {item.time}
                    <Icon type="edit" className={styles.editIcon} />
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
