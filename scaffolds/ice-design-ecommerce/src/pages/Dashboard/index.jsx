import React from 'react';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';

export default function Dashboard() {
  return (
    <div>
      <RealTimeOverview />
      <Notifications />
      <GeneralWidget />
      <PerformanceChart />
    </div>
  );
}

Dashboard.displayName = 'Dashboard';
