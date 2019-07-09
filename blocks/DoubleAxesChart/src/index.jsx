import React from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

export default function DoubleAxesChart() {
  const data = [
    { time: '10:10', call: 4, waiting: 2, people: 2 },
    { time: '10:15', call: 2, waiting: 6, people: 3 },
    { time: '10:20', call: 10, waiting: 2, people: 5 },
    { time: '10:25', call: 9, waiting: 9, people: 1 },
    { time: '10:30', call: 5, waiting: 2, people: 3 },
    { time: '10:35', call: 8, waiting: 2, people: 1 },
    { time: '10:40', call: 13, waiting: 1, people: 2 },
    { time: '10:45', call: 13, waiting: 1, people: 2 },
    { time: '10:50', call: 13, waiting: 1, people: 2 },
    { time: '10:55', call: 13, waiting: 2, people: 2 },
    { time: '11:00', call: 13, waiting: 1, people: 2 },
  ];
  const scale = {
    call: {
      min: 0,
    },
    people: {
      min: 0,
    },
    waiting: {
      min: 0,
    },
  };

  let chartIns = null;
  return (
    <div className="double-axes-chart">
      <IceContainer title="双轴图标">
        <Chart
          height={400}
          scale={scale}
          forceFit
          data={data}
          padding={[10, 10, 40, 60]}
          onGetG2Instance={(chart) => {
            chartIns = chart;
          }}
        >
          <Legend
            custom
            allowAllCanceled
            items={[
              {
                value: 'waiting',
                marker: { symbol: 'square', fill: '#3182bd', radius: 5 },
              },
              {
                value: 'people',
                marker: {
                  symbol: 'hyphen',
                  stroke: '#ffae6b',
                  radius: 5,
                  lineWidth: 3,
                },
              },
            ]}
            onClick={(ev) => {
              const item = ev.item;

              const value = item.value;
              const checked = ev.checked;
              const geoms = chartIns.getAllGeoms();
              for (let i = 0; i < geoms.length; i += 1) {
                const geom = geoms[i];
                if (geom.getYScale().field === value) {
                  if (checked) {
                    geom.show();
                  } else {
                    geom.hide();
                  }
                }
              }
            }}
          />
          <Axis
            name="people"
            grid={null}
            label={{
              textStyle: {
                fill: '#fdae6b',
              },
            }}
          />
          <Tooltip />
          <Geom type="interval" position="time*waiting" color="#3182bd" />
          <Geom
            type="line"
            position="time*people"
            color="#fdae6b"
            size={3}
            shape="smooth"
          />
          <Geom
            type="point"
            position="time*people"
            color="#fdae6b"
            size={3}
            shape="circle"
          />
        </Chart>
      </IceContainer>
    </div>
  );
}
