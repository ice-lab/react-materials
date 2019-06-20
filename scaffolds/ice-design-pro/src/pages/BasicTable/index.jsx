import React from 'react';
import TableChartCard from './components/TableChartCard';
import TabTable from './components/TabTable';
import { withAuth } from '@/components/Auth';

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
