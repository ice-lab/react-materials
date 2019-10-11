import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import styles from './index.module.scss';

const TabPane = Tab.Item;

export default function TabChart() {
  const handleChange = (key) => {
    console.log('change', key);
  };

  return (
    <div className={styles.container}>
      <IceContainer className={styles.card}>
        <Tab onChange={handleChange}>
          <TabPane key="1" title="收益走势">
            <SeriesLine />
          </TabPane>
          <TabPane key="2" title="成交趋势">
            <BasicLine />
          </TabPane>
        </Tab>
      </IceContainer>
    </div>
  );
}
