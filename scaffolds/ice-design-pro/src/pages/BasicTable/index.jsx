import React from 'react';
import TableChartCard from './components/TableChartCard';
import TabTable from './components/TabTable';

export default function BasicTable() {
  return (
    <div>
      <TabTable />
      <TableChartCard />
    </div>
  );
}

BasicTable.displayName = 'BasicTable';
