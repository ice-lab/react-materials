import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Grid } from '@alifd/next';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import Users from '../Users';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const TabPane = Tab.Item;

export default function TabChart() {
  const handleChange = (key) => {
    console.log('change', key);
  };

  return (
    <Row gutter="20">
      <Col l="18">
        <IceContainer className={styles.card}>
          <Tab onChange={handleChange}>
            <TabPane key="1" title="销售走势">
              <SeriesLine />
            </TabPane>
            <TabPane key="2" title="成交趋势">
              <BasicLine />
            </TabPane>
          </Tab>
        </IceContainer>
      </Col>
      <Col l="6">
        <Users />
      </Col>
    </Row>
  );
}
