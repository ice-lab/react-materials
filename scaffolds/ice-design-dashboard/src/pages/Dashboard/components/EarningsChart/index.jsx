import React from 'react';
import { Chart, Geom, Tooltip } from 'bizcharts';
import ContainerCard from '@/components/ContainerCard';
import styles from './index.module.scss';

const data = [
  { month: '1月', earnings: 38 },
  { month: '2月', earnings: 52 },
  { month: '3月', earnings: 61 },
  { month: '4月', earnings: 80 },
  { month: '5月', earnings: 65 },
  { month: '6月', earnings: 60 },
  { month: '7月', earnings: 60 },
  { month: '8月', earnings: 58 },
  { month: '9月', earnings: 48 },
  { month: '10月', earnings: 50 },
  { month: '11月', earnings: 40 },
  { month: '12月', earnings: 40 },
];
const cols = {
  earnings: { tickInterval: 20, alias: '总收入' },
};

export default function EarningsChart() {
  return (
    <ContainerCard contentStyle={{ padding: '10px 20px' }}>
      <div className={styles.head}>
        <h3 className={styles.title}>总收入</h3>
        <p className={styles.description}>2018年12月份总收入：</p>
        <h1 className={styles.earnings}>￥ 67,239,18</h1>
        <p className={styles.description}>28.12% (￥ 23,945)</p>
      </div>
      <div className={styles.content}>
        <Chart height={150} forceFit padding={[20]} data={data} scale={cols}>
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="interval"
            position="month*earnings"
            color="#ee706d"
            shape="smooth"
          />
        </Chart>
      </div>
      <div className={styles.footer}>
        <p className={styles.description}>2019年01月份总收入：</p>
        <h1
          className={styles.earnings}

          style={{ color: '#447eff' }}
        >
          ￥ 12,238,83
        </h1>
        <p className={styles.description}>11.83% (￥ 38,237)</p>
      </div>
    </ContainerCard>
  );
}
