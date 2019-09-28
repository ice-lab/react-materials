import React from 'react';
import { Grid, Input } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter({ onChange }) {
  return (
    <IceContainer className={styles.container}>
      <Row className={styles.row}>
        <Col l="2">
          <div className={styles.label}>方案名称:</div>
        </Col>
        <Col>
          <Input
            placeholder="请输入方案名称"
            hasClear
            onChange={onChange}
          />
        </Col>
      </Row>
    </IceContainer>
  );
}
