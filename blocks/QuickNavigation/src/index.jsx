import React from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const navigation = [
  {
    img: require('./images/open_email.png'),
    title: 'Inbox',
  },
  {
    img: require('./images/user.png'),
    title: 'Profile',
  },
  {
    img: require('./images/message.png'),
    title: 'Forum',
  },
  {
    img: require('./images/search.png'),
    title: 'Search',
  },
  {
    img: require('./images/bar_chart.png'),
    title: 'Live Stats',
  },
  {
    img: require('./images/setting.png'),
    title: 'Settings',
  },
];

export default function QuickNavigation() {
  return (
    <Row wrap gutter={20}>
      {navigation.map((item, index) => {
        return (
          <Col xxs="12" l="4" key={index}>
            <IceContainer>
              <div className={styles.navItem}>
                <img src={item.img} alt="" className={styles.img} />
                <h4 className={styles.title}>{item.title}</h4>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}
