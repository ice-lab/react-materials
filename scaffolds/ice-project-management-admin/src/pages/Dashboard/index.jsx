import React from 'react';
import Overview from './components/Overview';
import WrokReport from './components/WrokReport';
import QuickNav from './components/QuickNav';
import ProjectAnalysis from './components/ProjectAnalysis';

export default function Dashboard() {
  return (
    <div>
      <Overview />
      <WrokReport />
      <QuickNav />
      <ProjectAnalysis />
    </div>
  );
}
