import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import Masonry from 'react-masonry-component';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function CustomMasonry({ dataSource }) {
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
      <Row wrap>
        <Masonry options={masonryOptions} style={{ width: '100%' }}>
          {childElements}
        </Masonry>
      </Row>
    </IceContainer>
  );
}
