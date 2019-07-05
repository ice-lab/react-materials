import React from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';

import CustomTable from './CustomTable';
import styles from './index.module.scss';

const TabPane = Tab.Item;

const tabs = [
  { tab: '全部 AppKey', key: 'all', content: <CustomTable /> },
  { tab: '我的 AppKey', key: 'my', content: <CustomTable /> },
];

export default function AppKey() {
  return (
    <IceContainer className={styles.container}>
      <Tab>
        {tabs.map((item) => {
          return (
            <TabPane key={item.key} title={item.tab}>
              {item.content}
            </TabPane>
          );
        })}
      </Tab>
    </IceContainer>
  );
}
