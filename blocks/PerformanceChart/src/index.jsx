import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import LineChart from './LineChart';
import Head from './Head';
import './PerformanceChart.scss';
import styles from './index.module.scss'

const TabPane = Tab.Item;

const MOCK_DATA = {
  all: {
    day: '677.00',
    month: '3621.00',
    target: '10000.00',
    percent: '30',
  },
  online: {
    day: '1286.00',
    month: '2836.00',
    target: '5000.00',
    percent: '61',
  },
  offline: {
    day: '892.00',
    month: '1928.00',
    target: '5000.00',
    percent: '28',
  },
};
export default function PerformanceChart() {
  return (
    <IceContainer className="flow-statistics">
      <h4 className={styles.title}>销售业绩</h4>
      <Tab shape="text" size="small">
        <TabPane title="全店" key="1">
          <Head data={MOCK_DATA.all} />
          <LineChart />
        </TabPane>
        <TabPane title="网店" key="2">
          <Head data={MOCK_DATA.online} />
          <LineChart />
        </TabPane>
        <TabPane title="门店" key="3">
          <Head data={MOCK_DATA.offline} />
          <LineChart />
        </TabPane>
      </Tab>
    </IceContainer>
  );
}
