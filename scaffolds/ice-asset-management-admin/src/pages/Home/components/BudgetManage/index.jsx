import React from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Calculate from './Calculate';
import Memory from './Memory';
import styles from './index.module.scss';

const tabs = [
  { tab: '计算配额', key: 'calculate', content: <Calculate /> },
  { tab: '存储配额', key: 'memory', content: <Memory /> },
];

function handleChange(key) {
  console.log('change', key);
}

function handleClick(key) {
  console.log('click', key);
}

export default function BudgetManage() {
  return (
    <IceContainer className={styles.container}>
      <Tab
        onChange={handleChange}
        navStyle={{ fontWeight: '500', fontSize: '14px', color: 'rgba(0, 0, 0, 0.85)' }}
      >
        {tabs.map((item) => {
          return (
            <Tab.Item
              key={item.key}
              title={item.tab}
              onClick={handleClick}
            >
              {item.content}
            </Tab.Item>
          );
        })}
      </Tab>
    </IceContainer>
  );
}
