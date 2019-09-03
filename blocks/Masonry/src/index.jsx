import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import Masonry from 'react-masonry-component';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const data = [
  {
    img: require('./images/ice-design-analysis.png'),
    title: 'ice design analysis',
  },
  {
    img: require('./images/ice-design-cms.png'),
    title: 'ice design cms',
  },
  {
    img: require('./images/ice-design-dashboard.png'),
    title: 'ice design dashboard',
  },
  {
    img: require('./images/ice-design-ecommerce.png'),
    title: 'ice design ecommerce',
  },
  {
    img: require('./images/ice-open-platform.png'),
    title: 'ice open platform',
  },
  {
    img: require('./images/ice-website-homepage.png'),
    title: 'ice website homepage',
  },
  {
    img: require('./images/iceworks-homepage.png'),
    title: 'iceworks homepage',
  },
  {
    img: require('./images/ice-design-school.png'),
    title: 'ice design school',
  },
  {
    img: require('./images/ice-creator-landingpage.png'),
    title: 'ice creator landingpage',
  },
];

const dataSource = [...data, ...data, ...data]; // mock data

export default function CustomMasonry() {
  const childElements = dataSource.map(function(item, index) {
    return (
      <Col l="4" key={index}>
        <div className={styles.itemBody}>
          <img src={item.img} className={styles.itemImg} alt="" />
          <h3 className={styles.itemTitle}>{item.title}</h3>
        </div>
      </Col>
    );
  });

  const masonryOptions = {
    transitionDuration: 0,
  };

  return (
    <IceContainer className={styles.container}>
      <h3 className={styles.title}>瀑布流示例</h3>
      <Row wrap>
        <Masonry options={masonryOptions} style={{ width: '100%' }}>
          {childElements}
        </Masonry>
      </Row>
    </IceContainer>
  );
}
