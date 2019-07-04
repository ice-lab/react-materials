import React from 'react';
import Overview from './components/Overview';
import EmployeeTable from './components/EmployeeTable';

export default function Dashboard() {
  return (
    <div>
      <Overview />
      <EmployeeTable />
    </div>
  );
}
