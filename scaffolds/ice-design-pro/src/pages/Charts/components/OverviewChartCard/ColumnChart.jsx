import React from 'react';
import { Chart, Geom, Tooltip } from 'bizcharts';
import PropTypes from 'prop-types';

export default function ColumnChart(props) {
  const { color } = props;
  const data = [
    { month: '1', visits: 38 },
    { month: '2', visits: 52 },
    { month: '3', visits: 61 },
    { month: '4', visits: 50 },
    { month: '5', visits: 65 },
    { month: '6', visits: 60 },
    { month: '7', visits: 60 },
    { month: '8', visits: 58 },
    { month: '9', visits: 48 },
    { month: '10', visits: 50 },
    { month: '11', visits: 40 },
    { month: '12', visits: 40 },
  ];
  const cols = {
    visits: { tickInterval: 20 },
  };
  return (
    <Chart
      height={60}
      forceFit
      padding={[10, 2, 2, 2]}
      data={data}
      scale={cols}
    >
      <Geom
        type={props.type || 'interval'}
        position="month*visits"
        color={color || '#2077ff'}
        shape="smooth"
      />
      <Tooltip crosshairs={{ type: 'y' }} />
    </Chart>
  );
}

ColumnChart.propTypes = {
  type: PropTypes.string,
};

ColumnChart.defaultProps = {
  type: 'interval',
};
