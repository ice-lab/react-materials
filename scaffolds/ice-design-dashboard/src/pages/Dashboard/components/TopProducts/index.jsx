import React, { Component } from 'react';
import ContainerCard from '../../../../components/ContainerCard';
import styles from './index.module.scss';

const mockData = [
  {
    text: '查看所有',
    items: [
      {
        label: '产品 A',
        value: '62.4%',
      },
      {
        label: '产品 B',
        value: '15.0%',
      },
      {
        label: '产品 C',
        value: '62.4%',
      },
      {
        label: '产品 D',
        value: '5.0%',
      },
      {
        label: '产品 E',
        value: '4.5%',
      },
      {
        label: '产品 F',
        value: '2.3%',
      },
      {
        label: '产品 G',
        value: '1.7%',
      },
      {
        label: '产品 H',
        value: '1.5%',
      },
      {
        label: '产品 I',
        value: '1.4%',
      },
    ],
  },
];

export default class TopProducts extends Component {
  render() {
    return (
      <ContainerCard title="产品排名" contentStyle={{ padding: 0 }}>
        {mockData.map((data, index) => {
          return (
            <div className={styles.content} key={index}>
              <ul className={styles.items}>
                {data.items.map((item, idx) => {
                  return (
                    <li className={styles.item} key={idx}>
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.value}>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
              <a href="#" className={styles.button}>
                {data.text}
              </a>
            </div>
          );
        })}
      </ContainerCard>
    );
  }
}


