import React from 'react';
import OverviewChart from './components/OverviewChart';
import TaskTable from './components/TaskTable';

export default function TaskStatus() {
  return (
    <div>
      <OverviewChart />
      <TaskTable />
    </div>
  );
}
