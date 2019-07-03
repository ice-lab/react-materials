import React, { useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import DataSet from '@antv/data-set';
import Brush from '@antv/g2-brush';
import $ from 'jquery';
import dataSource from './mock.json';

function getComponent(chartData) {
  $('#mountNode').html('<div id="canvas1"></div><div id="canvas2"></div>');
  const ds = new DataSet({
    state: {
      dates: null,
    },
  });
  const dv = ds.createView();
  dv.source(chartData).transform({
    type: 'filter',
    callback: (obj) => {
      if (ds.state.dates) {
        return ds.state.dates.indexOf(obj.date) > -1;
      }

      return obj;
    },
  });

  const scale = {
    date: {
      tickCount: 10,
      type: 'time',
      mask: 'YYYY',
    },
    price: {
      alias: '总资金量',
    },
  };
  let chart2;

  function DoubleChart() {
    useEffect(() => {
      // eslint-disable-next-line no-new
      new Brush({
        canvas: chart2.get('canvas'),
        chart: chart2,
        type: 'X',
        dragable: true,

        onBrushmove(ev) {
          const { date } = ev;
          ds.setState('dates', date);
        },

        onDragmove(ev) {
          const { date } = ev;
          ds.setState('dates', date);
        },
      });
    }, []);
    return (
      <div>
        <Chart
          height={400}
          data={chartData}
          padding={[40, 40, 40, 80]}
          scale={scale}
          onGetG2Instance={(g2Chart) => {
            chart2 = g2Chart;
          }}
          forceFit
        >
          <Tooltip />
          <Axis
            name="price"
            label={{
              textStyle: {
                fill: '#fff',
              },
            }}
          />
          <Axis
            name="date"
            label={{
              textStyle: {
                fill: '#fff',
              },
            }}
          />
          <Geom
            type="area"
            position="date*price"
            shape="smooth"
            acitve={false}
            opacity={0.85}
          />
        </Chart>
      </div>
    );
  }
  return DoubleChart;
}

function Brushdsstate() {
  const DoubleChart = getComponent(dataSource);
  return (
    <div>
      <DoubleChart />
    </div>
  );
}

export default Brushdsstate;
