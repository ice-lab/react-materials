import React from 'react';
import { Tab, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Track from './Track';
import Scheme from './Scheme';
import styles from  './index.module.scss'

const TabPane = Tab.Item;

const tabs = [
  { tab: '埋点维度', key: 'track', content: <Track /> },
  { tab: '方案维度', key: 'scheme', content: <Scheme /> },
];

function handleChange(key) {
  console.log('change', key);
}

function handleClick(key) {
  console.log('click', key);
}

export default function TabFilterTable() {
  const renderTabExtraContent = () => {
    return <DatePicker size="large" className={styles.datapic} />;
  };

  return (
    <IceContainer className={styles.container1}>
      <Tab
        onChange={handleChange}
        extra={renderTabExtraContent()}
      >
        {tabs.map((item) => {
          return (
            <TabPane key={item.key} title={item.tab} onClick={handleClick}>
              {item.content}
            </TabPane>
          );
        })}
      </Tab>
    </IceContainer>
  );
}
