import React, { useState } from 'react';
import { Tab } from '@alifd/next';
import SmallCard from '@/components/SmallCard';

const TabPane = Tab.Item;

export default function Tabs({ data }) {
  const [currentTab, setCurrentTab] = useState('');

  let tabData = [];
  if (currentTab === '自建' || currentTab === '共享') {
    tabData.push(data[0]);
  } else if (currentTab === '预置') {
    tabData.push(data[1]);
  } else {
    tabData = data;
  }

  const Panes = [
    {
      tab: `全部（${data.length}）`,
    },
    {
      tab: '自建',
    },
    {
      tab: '预置',
    },
    {
      tab: '共享',
    },
  ];
  return (
    <Tab>
      {Panes.map((item, index) => (
        <TabPane
          key={index}
          title={item.tab}
          onClick={() => {
            setCurrentTab(item.tab);
          }}
        >
          <SmallCard tab={item.tab} data={tabData} />
        </TabPane>
      ))}
    </Tab>
  );
}
