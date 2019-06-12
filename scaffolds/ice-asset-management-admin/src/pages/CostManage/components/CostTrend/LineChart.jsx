import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from './index.module.scss';

export default class LineChart extends React.Component {
  render() {
    const { data } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);

    dv.transform({
      type: 'fold',
      fields: ['computationalCosts', 'storageCosts'],
      key: 'city',
      value: 'temperature',
    });

    const cols = {
      year: {
        range: [0, 1],
      },
    };

    return (
      <div className={styles.container}>
        <Chart
          height={400}
          padding={[60, 40, 40, 80]}
          data={dv}
          scale={cols}
          forceFit
        >
          <Legend
            position="left-top"
            layout="horizontal"
            marker="square"
            offsetY={-30}
            offsetX={240}
          />
          <Axis name="year" />
          <Axis
            name="temperature"
            label={{
              formatter: (val) => `${val}万元`,
            }}
          />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="line"
            position="year*temperature"
            size={2}
            color="city"
            shape="smooth"
          />
          <Geom
            type="point"
            position="year*temperature"
            size={4}
            shape="circle"
            color="city"
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          />
        </Chart>
      </div>
    );
  }
}

