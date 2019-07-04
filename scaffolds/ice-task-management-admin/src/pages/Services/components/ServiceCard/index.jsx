import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      name: '项目名称',
      desc: '这里是一段相关的项目简介，介绍项目的功能、特点',
      tag: '精选',
    };
  });
};

export default function ServiceCard() {
  const mockData = getData();
  return (
    <Row wrap gutter="20">
      {mockData.map((item, index) => {
        return (
          <Col l="8" key={index}>
            <IceContainer className={styles.container}>
              <div className={styles.body}>
                <h5 className={styles.name}>{item.name}</h5>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.tag}>{item.tag}</div>
              </div>
              <div className={styles.footer}>
                <Link
                  to="/activities"
                  className={styles.line}
                >
                  <Icon type="office" size="small" className={styles.icon} />{' '}
                    项目状态
                </Link>
                <Link to="/dashboard" className={styles.link}>
                  <Icon type="box" size="small" className={styles.icon} />
                    项目概览
                </Link>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}
