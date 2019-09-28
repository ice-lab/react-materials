import React from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import { DataView } from '@antv/data-set';
import styles from './index.module.scss';

export default function Index() {
  // 参考：https://alibaba.github.io/BizCharts/
  const data = [
    { item: 'Design', a: 70, b: 30 },
    { item: 'Development', a: 60, b: 70 },
    { item: 'Marketing', a: 50, b: 60 },
    { item: 'Users', a: 40, b: 50 },
    { item: 'Test', a: 60, b: 70 },
    { item: 'Language', a: 70, b: 50 },
    { item: 'Technology', a: 50, b: 40 },
    { item: 'Support', a: 30, b: 40 },
    { item: 'Sales', a: 60, b: 40 },
    { item: 'UX', a: 50, b: 60 },
  ];

  const dv = new DataView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['a', 'b'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });

  const cols = {
    score: {
      min: 0,
      max: 80,
    },
  };

  return (
    <div className="chart-radar">
      <IceContainer>
        <h4 className={styles.title}>雷达图</h4>
        <Chart
          height={400}
          data={dv}
          padding={[20, 20, 95, 20]}
          scale={cols}
        >
          <Coord type="polar" radius={0.8} />
          <Axis
            name="item"
            line={null}
            tickLine={null}
            grid={{
              lineStyle: {
                lineDash: null,
              },
              hideFirstLine: false,
            }}
          />
          <Tooltip />
          <Axis
            name="score"
            line={null}
            tickLine={null}
            grid={{
              type: 'polygon',
              lineStyle: {
                lineDash: null,
              },
              alternateColor: 'rgba(0, 0, 0, 0.04)',
            }}
          />
          <Legend name="user" marker="circle" offset={30} />
          <Geom type="area" position="item*score" color="user" />
          <Geom type="line" position="item*score" color="user" size={2} />
          <Geom
            type="point"
            position="item*score"
            color="user"
            shape="circle"
            size={4}
            style={{
              stroke: '#fff',
              /* stylelint-disable-next-line */ 
              lineWidth: 1,
              fillOpacity: 1,
            }}
          />
        </Chart>
      </IceContainer>
    </div>
  );
}
