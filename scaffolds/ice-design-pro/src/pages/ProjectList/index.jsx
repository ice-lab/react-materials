import React from 'react';
import ProjectTable from './components/ProjectTable';
import OverviewChart from './components/OverviewChart';

export default function ProjectList() {
  return (
    <div>
      <OverviewChart />
      <ProjectTable />
    </div>
  );
}
