import React from 'react';
import ContainerCard from '../../../../components/ContainerCard';
import BurshChart from './BurshChart';
import styles from './index.module.scss';

const MOCK_DATA = [
  {
    label: '总用户数',
    value: '15,125',
  },
  {
    label: '跳出率',
    value: '28.72%',
  },
  {
    label: '页面访问量',
    value: '94,381',
  },
  {
    label: '转化率',
    value: '78.23%',
  },
];

export default function InternetSalesChart() {
  return (
    <ContainerCard title="网络销售">
      <div className={styles.summary}>
        {MOCK_DATA.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value}>{item.value}</div>
            </div>
          );
        })}
      </div>
      <BurshChart />
    </ContainerCard>
  );
}

