import React from 'react';
import QuickNavigation from './components/QuickNavigation';
import OverviewChart from './components/OverviewChart';

export default function Dashboard() {
  return (
    <div>
      <QuickNavigation />
      <OverviewChart />
    </div>
  );
}

Dashboard.displayName = 'Dashboard';
