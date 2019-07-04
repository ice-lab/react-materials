import React from 'react';
import { Grid, Button, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;

const DATA = [
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB15qruAIfpK1RjSZFOXXa6nFXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1lnPoAHvpK1RjSZFqXXcXUVXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB15qruAIfpK1RjSZFOXXa6nFXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1lnPoAHvpK1RjSZFqXXcXUVXa-90-90.png',
  },
  {
    name: '淘小宝',
    jobTitle: 'CEO',
    avatar: 'https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png',
  },
];

export default function Member() {
  return (
    <Row wrap gutter="20">
      {DATA.map((item, index) => {
        return (
          <Col l="6" key={index}>
            <IceContainer className={styles.container}>
              <img src={item.avatar} alt="" className={styles.avatar} />
              <h4 className={styles.name}>{item.name}</h4>
              <p className={styles.jobTitle}>{item.jobTitle}</p>
              <div className={styles.action}>
                <Button type="primary">个人主页</Button>
                <Button type="secondary" style={{ marginLeft: '10px' }}>
                    发送消息
                </Button>
              </div>
              <div className={styles.socials}>
                <a className={styles.icon}>
                  <Icon type="good" size="small" />
                </a>
                <a className={styles.icon}>
                  <Icon type="atm-away" size="small" />
                </a>
                <a className={styles.icon}>
                  <Icon type="phone" size="small" />
                </a>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}
