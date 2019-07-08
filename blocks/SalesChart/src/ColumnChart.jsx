import React from 'react';
import { Chart, Geom, Tooltip } from 'bizcharts';
import PropTypes from 'prop-types';

export default function ColumnChart(props) {
  const { color, data } = props;
  const cols = {
    sales: { tickInterval: 20 },
  };
  return (
    <Chart height={200} forceFit padding={[2]} data={data} scale={cols}>
      <Geom
        type={props.type || 'interval'}
        position="month*sales"
        color={color || '#3fa1ff'}
        shape="smooth"
      />
      <Tooltip crosshairs={{ type: 'y' }} />
    </Chart>
  );
}

ColumnChart.propTypes = {
  data: PropTypes.array.isRequired,
};
