import React from 'react';
import { Grid } from '@alifd/next';

import ServiceCard from './components/ServiceCard';
import PublishTime from './components/PublishTime';
import PublishCount from './components/PublishCount';
import AccuracyRate from './components/AccuracyRate';
import PublishList from './components/PublishList';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Home() {
  return (
    <div className={styles.home}>
      <ServiceCard />
      <Row wrap gutter="20">
        <Col l="8">
          <PublishTime />
        </Col>
        <Col l="8">
          <PublishCount />
        </Col>
        <Col l="8">
          <AccuracyRate />
        </Col>
      </Row>
      <PublishList />
    </div>
  );
}
