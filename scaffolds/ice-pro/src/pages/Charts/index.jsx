import React from 'react';
import OverviewChartCard from './components/OverviewChartCard';
import TabChart from './components/TabChart';
import ProjectStatus from './components/ProjectStatus';
import OrderStatusChart from './components/OrderStatusChart';

export default function Charts() {
  return (
    <div className="charts-page">
      <OverviewChartCard />
      <TabChart />
      <ProjectStatus />
      <OrderStatusChart />
    </div>
  );
}
