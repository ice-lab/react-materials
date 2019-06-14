import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import CustomTable from './CustomTable';
import styles from './index.module.scss';

const TabPane = Tab.Item;

const tabs = [
  { tab: '全部 AppKey', key: 'all', content: <CustomTable /> },
  { tab: '我的 AppKey', key: 'my', content: <CustomTable /> },
];

function handleChange(key) {
  console.log('change', key);
}

function handleClick(key) {
  console.log('click', key);
}

export default class AppKey extends Component {
  render() {
    return (
      <IceContainer className={styles.container}>
        <Tab onChange={handleChange}>
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
}
