import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from './index.module.scss';

export default function LineChart(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, fields, buttons } = props;

  const ds = new DataSet();
  const dv = ds.createView().source(data);

  dv.transform({
    type: 'fold',
    fields,
    key: 'city',
    value: 'temperature',
  });

  const cols = {
    month: {
      range: [0, 1],
    },
  };

  const handleClick = async (index, value) => {
    await setCurrentIndex(index);
    props.onChange(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {buttons.map((item, index) => {
          const actived = currentIndex === index ? styles.actived : {};
          return (
            <a
              key={index}
              className={`${styles.button} ${actived}`}
              onClick={() => handleClick(index, item.value)}
            >
              {item.text}
            </a>
          );
        })}
      </div>
      <Chart height={400} padding={[40]} data={dv} scale={cols} forceFit>
        <Legend />
        <Axis name="month" />
        <Axis
          name="temperature"
          label={{
            formatter: val => `${val}`,
          }}
        />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom
          type="line"
          position="month*temperature"
          size={2}
          color="city"
          shape="smooth"
        />
        <Geom
          type="point"
          position="month*temperature"
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

LineChart.propTypes = {
  data: PropTypes.array,
  fields: PropTypes.array,
  buttons: PropTypes.array,
  onChange: PropTypes.func,
};

LineChart.defaultProps = {
  data: [],
  fields: [],
  buttons: [],
  onChange: () => {},
};
