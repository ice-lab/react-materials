import React from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const navigation = [
  {
    img: require('./images/TB1wdncx1SSBuNjy0FlXXbBpVXa-200-200.png'),
    title: '待审核课件',
    color: '#ee706d',
    count: '30',
  },
  {
    img: require('./images/TB11ED_xYGYBuNjy0FoXXciBFXa-200-200.png'),
    title: '待批改作业',
    color: '#f7da47',
    count: '120',
  },
  {
    img: require('./images/TB1Kvg3x4GYBuNjy0FnXXX5lpXa-200-200.png'),
    title: '待批阅试卷',
    color: '#58ca9a',
    count: '160',
  },
  {
    img: require('./images/TB1aAH_xYGYBuNjy0FoXXciBFXa-200-200.png'),
    title: '待评分实训',
    color: '#447eff',
    count: '69',
  },
  {
    img: require('./images/TB1BMGtyntYBeNjy1XdXXXXyVXa-200-200.png'),
    title: '已审核课件',
    color: '#ee706d',
    count: '85',
  },
  {
    img: require('./images/TB1IQ2_xYGYBuNjy0FoXXciBFXa-200-200.png'),
    title: '已批改作业',
    color: '#f7da47',
    count: '93',
  },
  {
    img: require('./images/TB1o2c3x4GYBuNjy0FnXXX5lpXa-200-200.png'),
    title: '已批阅试卷',
    color: '#58ca9a',
    count: '185',
  },
  {
    img: require('./images/TB1wQD_xYGYBuNjy0FoXXciBFXa-200-200.png'),
    title: '已评分实训',
    color: '#447eff',
    count: '235',
  },
];

export default function QuickNavigation() {
  return (
    <Row wrap gutter={20}>
      {navigation.map((item, index) => {
        return (
          <Col xxs="12" l="6" key={index}>
            <IceContainer style={{ background: item.color }}>
              <div className={styles.navItem}>
                <div className={styles.imgWrap}>
                  <img src={item.img} alt="" className={styles.img} />
                </div>
                <div className={styles.infoWrap}>
                  <p className={styles.count}>{item.count}</p>
                  <h5 className={styles.title}>{item.title}</h5>
                </div>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}
