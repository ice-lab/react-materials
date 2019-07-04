import React, { useState, useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

const scale = {
  time: {
    alias: '时间',
    type: 'time',
    mask: 'MM:ss',
    tickCount: 10,
    nice: false,
  },
  temperature: {
    alias: '平均温度(°C)',
    min: 10,
    max: 35,
  },
  type: {
    type: 'cat',
  },
};

export default function SliderChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((data) => {
        const newData = data.map(item => item);
        const now = new Date();
        const time = now.getTime();
        const temperature1 = parseInt(Math.random() * 5, 10) + 22;
        const temperature2 = parseInt(Math.random() * 7, 10) + 17;

        if (newData.length >= 200) {
          newData.shift();
          newData.shift();
        }

        newData.push({
          time,
          temperature: temperature1,
          type: '记录1',
        });
        newData.push({
          time,
          temperature: temperature2,
          type: '记录2',
        });
        return newData;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Chart
      height={260}
      padding={[40]}
      data={data}
      scale={scale}
      forceFit
    >
      <Tooltip />
      {data.length !== 0 ? <Axis /> : ''}
      <Legend />
      <Geom
        type="line"
        position="time*temperature"
        color={['type', ['#ff7f0e', '#2ca02c']]}
        shape="smooth"
        size={2}
      />
    </Chart>
  );
}
