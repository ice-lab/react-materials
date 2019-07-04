import React from 'react';
import { Grid, Input } from '@alifd/next';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function TableFilter({ onChange }) {
  return (
    <Row className={styles.row}>
      <Col l="2">
        <div className={styles.label}>数据过滤:</div>
      </Col>
      <Col>
        <Input
          placeholder="请输入 APPID、APPKey、应用名称"
          hasClear
          onChange={onChange}
          style={{ width: '300px' }}
        />
      </Col>
    </Row>
  );
}
