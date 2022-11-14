import * as React from 'react';
import { Card } from 'antd';
import { Column } from '@ant-design/charts';
import styles from './index.module.css';

interface CardConfig {
  title?: string;
  chartData?: Array<Record<string, any>>;
  chartHeight?: number;
}

const DEFAULT_DATA: CardConfig = {
  title: '消费数据',
  chartData: [
    { category: '品类一', value: 123, type: '门店一' },
    { category: '品类一', value: 231, type: '门店二' },
    { category: '品类一', value: 321, type: '门店三' },
    { category: '品类二', value: -234, type: '门店一' },
    { category: '品类二', value: -342, type: '门店二' },
    { category: '品类二', value: -432, type: '门店三' },
    { category: '品类三', value: 322, type: '门店一' },
    { category: '品类三', value: 211, type: '门店二' },
    { category: '品类三', value: 113, type: '门店三' },
    { category: '品类四', value: 435, type: '门店一' },
    { category: '品类四', value: 543, type: '门店二' },
    { category: '品类四', value: 333, type: '门店三' },
    { category: '品类五', value: 111, type: '门店一' },
    { category: '品类五', value: 452, type: '门店二' },
    { category: '品类五', value: 234, type: '门店三' },
  ],
  chartHeight: 500,
};

export interface CardGroupBarChartProps {
  cardConfig?: CardConfig;
}

const CardGroupBarChart: React.FunctionComponent<CardGroupBarChartProps> = (props: CardGroupBarChartProps): JSX.Element => {
  const {
    cardConfig = DEFAULT_DATA,
  } = props;

  const { title, chartData, chartHeight } = cardConfig;

  return (
    <Card title={title} className={styles.cardGroupBarChart}>
      <Column
        data={chartData!}
        xField="category"
        yField="value"
        seriesField="type"
        isGroup
        width={10}
        height={chartHeight}
        label={{
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 可配置附加的布局方法
          layout: [
            // 柱形图数据标签位置自动调整
            { type: 'interval-adjust-position' },
            // 数据标签防遮挡
            { type: 'interval-hide-overlap' },
            // 数据标签文颜色自动调整
            { type: 'adjust-color' },
          ],
        }}
      />
    </Card >
  );
};

export default CardGroupBarChart;
