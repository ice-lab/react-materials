import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ColumnChart from './ColumnChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    title: '页面预览',
    amount: '1,293',
    percent: '15%',
    increase: true,
    color: '#fff',
    borderColor: '#4FD4A4',
    background: '#1BC98E',
  },
  {
    title: '下载次数',
    amount: '758',
    percent: '1.3%',
    increase: false,
    color: '#fff',
    borderColor: '#EB6C7A',
    background: '#E64758',
  },
  {
    title: '月活跃用户',
    amount: '3,659',
    percent: '20%',
    increase: true,
    color: '#fff',
    borderColor: '#B29FFF',
    background: '#9F85FF',
  },
  {
    title: '日活跃用户',
    amount: '298',
    percent: '12%',
    increase: false,
    color: '#fff',
    borderColor: '#E9E063',
    background: '#E5D936',
  },
];

export default function OverviewSatesChart() {
  return (
    <IceContainer>
      <Row wrap gutter={20}>
        {mockData.map((item, index) => {
          return (
            <Col xxs="24" l="6" key={index}>
              <div style= {{ background: item.background }}>
                <div
                  style={{
                    
                    border: `1px solid ${item.borderColor}`,
                  }}
                >
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.data}>
                    <h2 className={styles.amount}>{item.amount}</h2>
                    <div className={styles.percent}>
                      {item.percent}{' '}
                      <Icon
                        type={`arrow-${
                          item.increase ? 'up' : 'down'
                        }-filling`}
                        size="xs"
                        className={styles.arrowIcon}
                      />
                    </div>
                  </div>
                </div>
                <ColumnChart color="#fff" />
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}
