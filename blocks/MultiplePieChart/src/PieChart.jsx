import React from 'react';

const ReactHighcharts = require('react-highcharts');
const Highcharts = require('highcharts');

export default function PieChart(props) {
  const config = {
    chart: {
      height: 300,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: props.showInLegend || false,
        dataLabels: {
          enabled: props.dataLabels || false,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color:
              (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              'black',
          },
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: props.data || [],
      },
    ],
  };

  return <ReactHighcharts config={config} />;
}
