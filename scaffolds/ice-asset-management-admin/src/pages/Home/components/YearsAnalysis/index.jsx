import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import LineChart from './LineChart';
import Head from './Head';
import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const MOCK_DATA = {
  memory: {
    monthRate: '1.88',
    monthAmount: '1234.56',
    dayRate: '0.66',
    dayAmount: '23',
  },
  calculate: {
    monthRate: '2.99',
    monthAmount: '5678.99',
    dayRate: '0.77',
    dayAmount: '45',
  },
  cost: {
    monthRate: '3.66',
    monthAmount: '8765.43',
    dayRate: '0.88',
    dayAmount: '67',
  },
};
export default class YearsAnalysis extends Component {
  static displayName = 'YearsAnalysis';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      type: 'memory',
    };
  }

  changeType = (type) => {
    this.setState({
      type,
    });
  }

  render() {
    const { type } = this.state;

    return (
      <IceContainer className={`${styles.container} years-analysis` }>
        <div className={styles.titleContainer}>
          <div className={styles.title}>财年分析</div>
          <Select onChange={this.changeType} value={type} size="small">
            {
              ['memory', 'calculate', 'cost'].map((item) => {
                return <Select.Option value={item} key={item}>{item}</Select.Option>;
              })
            }
          </Select>
        </div>
        <div className={styles.chartContent}>
          <Head data={MOCK_DATA[type]} />
          <LineChart />
        </div>
      </IceContainer>
    );
  }
}


