import React from 'react';
import Overview from './components/Overview';
import QuickNav from './components/QuickNav';
import SalaryChart from './components/SalaryChart';
import Employee from './components/Employee';

export default function Dashboard() {
  return (
    <div>
      <QuickNav />
      <Overview />
      <Employee />
      <SalaryChart />
    </div>
  );
}
