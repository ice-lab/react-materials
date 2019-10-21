import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Overview(props) {
  const { data = [] } = props;
  return (
    <Row wrap gutter="20">
      {data.map((item, index) => {
        return (
          <Col l={8} key={index} className={styles.item}>
            <IceContainer
              className={styles.IceContainer}
              style={{ background: item.background }}
            >
              <div className={styles.title}>{item.title}</div>
              <div className={styles.value}>{item.value}</div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}
