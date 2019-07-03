import React from 'react';
import { Grid, Icon } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Card({ data }) {
  return (
    <Row wrap gutter="20">
      {data.map((item, index) => {
        return (
          <Col l={8} key={index}>
            <div className={styles.card}>
              <div className={styles.body}>
                <Link to="/setting">
                  <Icon type="set" className={styles.settingIcon} />
                </Link>
                <Icon type={item.icon} size="xl" className={styles.pictureIcon} />
                <p className={styles.appid}>Appid: {item.appid}</p>
              </div>
              <div className={styles.footer}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>{item.desc}</div>
                <div className={styles.time}>
                  更新时间：
                  {item.time}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
