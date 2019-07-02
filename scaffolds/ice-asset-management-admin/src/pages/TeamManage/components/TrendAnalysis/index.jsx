import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import LineChart from './LineChart';
import styles from './index.module.scss';

const chartData = [
  {
    month: '一月',
    Health: 5.9,
    Table: 1.9,
  },
  {
    month: '二月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '三月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '四月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '五月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '六月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '七月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '八月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '九月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '十月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '十一月',
    Health: 6.0,
    Table: 2.0,
  },
  {
    month: '十二月',
    Health: 6.0,
    Table: 2.0,
  },
];

const fields = ['Health', 'Table'];

const typeToButtons = {
  calculate: [
    {
      text: '计算健康度',
      value: 'calculateHealth',
    },
    {
      text: '计算消耗',
      value: 'calculateMemory',
    },
    {
      text: '计算费用',
      value: 'calculateCosts',
    },
  ],
  memory: [
    {
      text: '存储健康度',
      value: 'storageHealth',
    },
    {
      text: '存储量',
      value: 'storageMemory',
    },
    {
      text: '存储费用',
      value: 'storageCosts',
    },
  ],
  cost: [
    {
      text: '表数',
      value: 'table',
    },
    {
      text: '任务数',
      value: 'tasks',
    },
  ],
};

export default function TrendAnalysis() {
  const [type, setType] = useState('calculate');
  const buttons = typeToButtons[type];

  const changeType = (type) => {
    setType(type);
  };

  const handleClick = (value) => {
    console.log('handleClick:', value);
  };

  return (
    <IceContainer className={`${styles.container} trend-analysis`}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>趋势分析</div>
        <Select onChange={changeType} value={type} size="small">
          {
            ['calculate', 'memory', 'cost'].map((item) => {
              return <Select.Option value={item} key={item}>{item}</Select.Option>;
            })
          }
        </Select>
      </div>

      <div className={styles.chartContent}>
        <LineChart
          onChange={handleClick}
          fields={fields}
          data={chartData}
          buttons={buttons}
        />
      </div>
    </IceContainer>
  );
}


