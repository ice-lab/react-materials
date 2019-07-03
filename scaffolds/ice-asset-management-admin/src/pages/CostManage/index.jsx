import React from 'react';
import Overview from './components/Overview';
import CostTrend from './components/CostTrend';
import DepartmentCost from './components/DepartmentCost';

export default function CostManage() {
  return (
    <div>
      <Overview />
      <CostTrend />
      <DepartmentCost />
    </div>
  );
}
