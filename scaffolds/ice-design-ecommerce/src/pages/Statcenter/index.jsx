import React from 'react';
import DataOverview from './components/DataOverview';
import FlowStatistics from './components/FlowStatistics';
import LineBarChart from './components/LineBarChart';
import OverviewPieChart from './components/OverviewPieChart';
import TopActiveChart from './components/TopActiveChart';

export default function Statcenter() {
  return (
    <div>
      <DataOverview />
      <OverviewPieChart />
      <LineBarChart />
      <FlowStatistics />
      <TopActiveChart />
    </div>
  );
}
