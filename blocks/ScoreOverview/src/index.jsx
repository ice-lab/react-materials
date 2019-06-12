import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务替换掉
const mockData = [
  {
    title: '计算',
    cost: '2.34亿元',
    rank: '78/100',
    accumulative: '567.89亿元',
    score: {
      name: '该日计算健康分',
      value: '98.62',
      desc: '状况不错，保持住哦!',
    },
    consume: {
      name: '该日计算消耗',
      value: '33.65',
      ratio: '16.63%',
    },
  },
  {
    title: '存储',
    cost: '1.23亿元',
    rank: '98/100',
    accumulative: '765.89亿元',
    score: {
      name: '该日存储健康分',
      value: '88.23',
      desc: '刚及格，请继续改进!',
    },
    consume: {
      name: '该日存储消耗',
      value: '58.39',
      ratio: '6.21%',
    },
  },
];

export default class ScoreOverview extends Component {
  static displayName = 'ScoreOverview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap gutter={20}>
        {mockData.map((item, index) => {
          const scoreColor =
            item.score.value > 90 ? styles.green : styles.yellow;
          const consumeColor =
            item.consume.value > 90 ? styles.green : styles.yellow;
          return (
            <Col l="12" key={index}>
            <IceContainer className={styles.container}>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.body}>
                <div className={styles.cell}>
                  <div className={styles.cellName}>{item.score.name}</div>
                  <div className={`${styles.cellValue} ${scoreColor}`}>
                    {item.score.value}
                  </div>
                  <div className={`${styles.cellDesc} ${consumeColor}`} >
                    {item.score.desc}
                  </div>
                </div>
                <div className={styles.cell}>
                  <div className={styles.cellName}>{item.consume.name}</div>
                  <div className={`${styles.cellValue} ${styles.black}`}>
                    {item.consume.value}
                  </div>
                  <div className={`${styles.cellDesc} ${styles.grey}`}>
                    <span className={styles.ratioLabel}>环比</span>
                    <span className={styles.ratioValue}>
                      {item.consume.ratio}
                    </span>
                  </div>
                </div>
              </div>
                <div className={styles.footer}>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>当日计算费用： </div>
                    <div className={styles.itemValue}>{item.cost}</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>当日公司排名： </div>
                    <div className={styles.itemValue}>{item.rank}</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>财年累计费用： </div>
                    <div className={styles.itemValue}>{item.accumulative}</div>
                  </div>
                </div>
              </IceContainer>
            </Col>
          );
        })}
      </Row>
    );
  }
}

