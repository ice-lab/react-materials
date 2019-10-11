import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import styles from  './index.module.scss';

const ReactHighcharts = require('react-highcharts');

const { Option } = Select;

const config = {
  credits: {
    enabled: false,
  },
  chart: {
    type: 'column',
  },
  title: {
    text: '',
  },
  xAxis: {
    title: {
      text: '时间',
    },
    categories: [
      '02: 00',
      '04: 00',
      '06: 00',
      '08: 00',
      '10: 00',
      '12: 00',
      '14: 00',
      '16: 00',
      '18: 00',
      '20: 00',
      '22: 00',
      '00: 00',
    ],
  },
  yAxis: [
    {
      title: {
        text: '构建次数',
      },
      tickInterval: 300,
    },
    {
      title: {
        text: '百分比',
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
        format: '{value}%',
      },
    },
  ],
  series: [
    {
      name: '失败',
      type: 'spline',
      pointStart: 0,
      color: '#f29b70',
      zIndex: 3,
      data: [200, 300, 203, 485, 160, 322, 340, 128, 260, 280, 300, 320],
    },
    {
      name: '成功',
      type: 'column',
      color: '#f29b70',
      zIndex: 2,
      data: [55, 122, 151, 86, 72, 51, 36, 40, 200, 220, 240, 260],
    },
  ],
};

const types = {
  day: '24 小时',
  month: '30 天',
  year: '12 个月',
};

export default function ParetoChart() {
  const [value, setValue] = useState('day');

  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <IceContainer>
      <div className={styles.cardHead}>
        <h4 className={styles.cardTitle}>
          {types[value]}
          构建次数
        </h4>
        <Select size="large" value={value} onChange={handleChange}>
          <Option value="day">24 小时</Option>
          <Option value="month">30 天</Option>
          <Option value="year">12 个月</Option>
        </Select>
      </div>
      <ReactHighcharts config={config} />
    </IceContainer>
  );
}
