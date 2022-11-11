import * as React from 'react';
import { Card } from 'antd';
import { TinyLine } from '@ant-design/charts';
import mock from './mock';
import styles from './index.module.css';

interface CardConfig {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  value?: string;
  values?: number[];
  nums?: number[];
  des?: string;
  rate?: string;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '门店活动效果',
  value: mock.value,
  values: mock.values,
  nums: mock.nums,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100,
};

export interface CardLineChartProps {
  cardConfig?: CardConfig;
}

const CardLineChart: React.FunctionComponent<CardLineChartProps> = (props: CardLineChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, subTitle, value, values, des, rate, chartHeight } = cardConfig;

  return (
    <Card title={title}>
      <div className={styles.cardSubTitle}>{subTitle}</div>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardDes}>{des}<span>{rate}↑</span></div>
      <TinyLine
        data={values!}
        width={10}
        height={chartHeight}
        smooth
      />
    </Card>
  );
};

export default CardLineChart;
