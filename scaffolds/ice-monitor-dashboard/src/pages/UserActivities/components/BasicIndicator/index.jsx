import React, { useState } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';

import ContainerTitle from '@/components/ContainerTitle';
import LineChart from './LineChart';
import './index.scss';

const defaultData = [
  {
    year: '1991',
    value: 3,
  },
  {
    year: '1992',
    value: 4,
  },
  {
    year: '1993',
    value: 3.5,
  },
  {
    year: '1994',
    value: 5,
  },
  {
    year: '1995',
    value: 4.9,
  },
  {
    year: '1996',
    value: 6,
  },
  {
    year: '1997',
    value: 7,
  },
  {
    year: '1998',
    value: 9,
  },
  {
    year: '1999',
    value: 13,
  },
];

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default function BasicIndicator() {
  const [data, setData] = useState(defaultData);
  const cols = {
    value: {
      min: 0,
    },
    year: {
      range: [0, 1],
    },
  };

  function handleTabChange() {
    const newData = data.map((item) => {
      return {
        year: item.year,
        value: item.value + random(1, 2),
      };
    });
    console.log(newData);
    setData(newData);
  }

  const complexTab1 = (
    <div className="complexTab">
      <p className="tabTitle">用户评价访问频次</p>
      <h5 className="tabValue">1.08</h5>
      <p className="tabDesc">与上一周同期比 -10%</p>
    </div>
  );

  const complexTab2 = (
    <div className="complexTab">
      <p className="tabTitle">用户评价访问频次</p>
      <h5 className="tabValue">00:00:56</h5>
      <p className="tabDesc">与上一周同期比 20%</p>
    </div>
  );

  const panes = [
    {
      tab: complexTab1,
      key: 0,
    },
    {
      tab: complexTab2,
      key: 1,
    },
  ];

  return (
    <IceContainer>
      <ContainerTitle title="基本活跃指标" />
      <Tab
        onChange={handleTabChange}
        className="basic-indicator-tab"

      >
        {panes.map((pane) => {
          return (
            <Tab.Item title={pane.tab} key={pane.key}>
              <LineChart data={data} cols={cols} />
            </Tab.Item>
          );
        })}
      </Tab>
    </IceContainer>
  );
}
