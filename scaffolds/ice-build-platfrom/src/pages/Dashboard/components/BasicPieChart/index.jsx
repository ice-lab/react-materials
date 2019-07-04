/* eslint object-shorthand: 0,space-before-function-paren:0, prefer-template:0, wrap-iife:0 */
import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import styles from './index.module.scss';

const ReactHighcharts = require('react-highcharts');
const Highcharts = require('highcharts');

const { Option } = Select;
const random = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const chartConfig = {
  chart: {
    height: 300,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color:
            (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
        },
      },
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Webpack',
          y: 41.41,
          sliced: true,
          selected: true,
          color: '#5e83fb',
        },
        {
          name: 'Rollup',
          y: 11.84,
          color: '#ee6f6d',
        },
        {
          name: 'Parcel',
          y: 10.26,
          color: '#999',
        },
        {
          name: 'Gulp',
          y: 10.85,
          color: '#333',
        },
        {
          name: 'Browserify',
          y: 14.67,
          color: '#f7d947',
        },
        {
          name: 'Grunt',
          y: 10.97,
          color: '#57ca9a',
        },
      ],
    },
  ],
};

export default function BasicPieChart() {
  const [selectedValue, setSelectedValue] = useState('day');
  const [config, setConfig] = useState(chartConfig);

  function handleChange(val) {
    config.series[0].data[0].y = random(20, 40);
    setSelectedValue(val);
    setConfig(config);
  }

  return (
    <IceContainer>
      <div className={styles.cardHead}>
        <h4 className={styles.cardTitle}>
          Client 构建分布
        </h4>
        <Select
          size="large"
          defaultValue="day"
          value={selectedValue}
          onChange={handleChange}
        >
          <Option value="day">
            今日
          </Option>
          <Option value="yesterday">
            昨日
          </Option>
          <Option value="week">
            7 天
          </Option>
          <Option value="year">
            12 个月
          </Option>
        </Select>
      </div>
      <ReactHighcharts config={config} />
    </IceContainer>
  );
}
