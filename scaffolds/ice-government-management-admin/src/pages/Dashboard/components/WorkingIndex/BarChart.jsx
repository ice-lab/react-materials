import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import styles from './index.module.scss';

const mock = {
  index: [
    {
      index: '收案数',
      number: 290,
    },
    {
      index: '结案数',
      number: 380,
    },
    {
      index: '存案数',
      number: 200,
    },
  ],
  average: '45',
};

const cols = {
  number: {
    tickInterval: 100,
  },
};

export default class BarChart extends Component {
  formatAxis = (text) => {
    return `${text}件`;
  };

  formatTooltip = (index, number) => {
    return {
      name: index,
      title: index,
      value: `${number}件`,
    };
  };

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.average}>
          平均执行天数: <span className={styles.number}>{mock.average}</span>
        </h4>
        <Chart
          width={220}
          height={220}
          data={mock.index}
          scale={cols}
          padding={[40, 10, 40, 60]}
        >
          <Axis
            name="index"
            label={{
              offset: 4,
              textStyle: {
                textAlign: 'center',
                fill: '#666',
                fontSize: '12',
                fontWeight: 'normal',
                rotate: 0,
                textBaseline: 'top',
              },
              autoRotate: false,
            }}
          />
          <Axis
            name="number"
            label={{
              formatter: this.formatAxis,
            }}
          />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="interval"
            color="#5e83fb"
            position="index*number"
            shape={['index', ['circle', 'rect']]}
            tooltip={['index*number', this.formatTooltip]}
          />
        </Chart>
      </div>
    );
  }
}


