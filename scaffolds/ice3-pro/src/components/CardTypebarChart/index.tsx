import * as React from 'react';
import { Card } from 'antd';
import { RingProgress } from '@ant-design/charts';
import mock from './mock';
import styles from './index.module.css';

interface CardConfig {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  value?: string;
  chartData?: number;
  des?: string;
  rate?: string;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '商品销售',
  value: mock.value,
  chartData: mock.salePercent,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100,
};

export interface CardTypebarChartProps {
  cardConfig?: CardConfig;
}

const CardTypebarChart: React.FunctionComponent<CardTypebarChartProps> = (props: CardTypebarChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, subTitle, value, des, rate, chartHeight, chartData } = cardConfig;

  return (
    <Card title={title}>
      <div className={styles.cardSubTitle}>{subTitle}</div>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardDes}>{des}<span>{rate}↑</span></div>
      <RingProgress
        percent={chartData!}
        height={chartHeight}
        width={10}
        color={['#5B8FF9', '#E8EDF3']}
        progressStyle={{ width: 30 }}
      />
    </Card>
  );
};

export default CardTypebarChart;
