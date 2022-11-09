import * as React from 'react';
import { Card } from 'antd';
import { Chart, Geom } from 'bizcharts';
import mock from './mock';
import styles from './index.module.css';

interface ChartItem {
  date?: string;
  value?: number;
}

interface CardConfig {
  title?: string | React.ReactDOM;
  subTitle?: string | React.ReactNode;
  value?: string;
  chartData?: ChartItem[];
  des?: string;
  rate?: number;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '总销售额',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: 10.1,
  chartHeight: 100,
};

export interface CardBarChartProps {
  cardConfig?: CardConfig;
}

const CardBarChart: React.FunctionComponent<CardBarChartProps> = (props: CardBarChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, subTitle, value, chartData, des, rate, chartHeight } = cardConfig;

  return (
    <Card title={title}>
      <div className={styles.cardSubTitle}>{subTitle}</div>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardDes}>{des}<span>{rate}↑</span></div>
      <Chart
        width={10}
        height={chartHeight}
        data={chartData}
        scale={{
          date: {
            range: [0, 1],
          },
        }}
        forceFit
        padding={['auto', '16']}
      >
        <Geom type="interval" position="date*value" color="#29A5FF" />
      </Chart>
    </Card>
  );
};

export default CardBarChart;
