import React from 'react';
import { withAuth } from '@/components/Auth';
import TableChartCard from './components/TableChartCard';
import TabTable from './components/TabTable';

function BasicTable() {
  return (
    <div>
      <TabTable />
      <TableChartCard />
    </div>
  );
}

BasicTable.displayName = 'BasicTable';

export default withAuth({
  authorities: ['admin'],
})(BasicTable);
