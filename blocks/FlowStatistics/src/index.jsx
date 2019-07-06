import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import LineChart from './LineChart';
import Head from './Head';
import styles from './index.module.scss';

const MOCK_DATA = {
  threeMonths: {
    visits: '4,677',
    unique_users: '3,621',
    ip: '5,690',
    click: '6,583',
  },
  halfYear: {
    visits: '6,688',
    unique_users: '8,339',
    ip: '7,989',
    click: '9,832',
  },
  nearlyYear: {
    visits: '10,323',
    unique_users: '9,262',
    ip: '12,639',
    click: '26,386',
  },
};
export default function FlowStatistics() {
  return (
    <IceContainer className="flow-statistics">
      <h4 className={styles.title}>流量统计</h4>
      <Tab shape="text" size="small">
        <Tab.Item title="近三个月" key="1">
          <Head data={MOCK_DATA.threeMonths} />
          <LineChart />
        </Tab.Item>
        <Tab.Item title="近半年" key="2">
          <Head data={MOCK_DATA.halfYear} />
          <LineChart />
        </Tab.Item>
        <Tab.Item title="近一年" key="3">
          <Head data={MOCK_DATA.nearlyYear} />
          <LineChart />
        </Tab.Item>
      </Tab>
    </IceContainer>
  );
}
