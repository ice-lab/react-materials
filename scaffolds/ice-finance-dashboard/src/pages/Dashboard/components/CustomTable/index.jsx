/* eslint no-mixed-operators:0 */
import React from 'react';
import ContainerCard from '@/components/ContainerCard';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      name: '淘小宝',
      amount: random(10000, 20000),
      usage: ['高利贷还款', '个人消费', '其他'][random(0, 2)],
      duration: ['30天', '90天', '半年', '一年'][random(0, 3)],
      rate: '2.2%',
    };
  });
};

export default function CustomTable() {
  return (
    <ContainerCard title="借款列表">
      <table className={styles.customTable}>
        <tbody>
          <tr className={styles.thead}>
            <td>用户名</td>
            <td>借款金额</td>
            <td>借款用途</td>
            <td>借款时长</td>
            <td>借款利率</td>
          </tr>
          {getData().map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td className={styles.customTh}>{item.amount}</td>
                <td>{item.usage}</td>
                <td>{item.duration}</td>
                <td className={styles.customTh}>{item.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContainerCard>
  );
}
