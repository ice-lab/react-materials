import React from 'react';
import { Tab, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';

import Track from './Track';
import Scheme from './Scheme';

const TabPane = Tab.Item;

const tabs = [
  { tab: '埋点维度', key: 'track', content: <Track /> },
  { tab: '方案维度', key: 'scheme', content: <Scheme /> },
];

export default function TrackTab() {
  return (
    <IceContainer style={styles.container}>
      <Tab
        extra={<DatePicker style={{ marginRight: '20px' }} />}
      >
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

const styles = {
  container: {
    margin: '20px',
    padding: '10px 0',
  },
};
