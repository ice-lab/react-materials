import React from 'react';
import { withAuth } from '@/components/Auth';
import Table from './components/Table';

function BasicList() {
  return (
    <div className="list-page">
      <Table />
    </div>
  );
}

export default withAuth({
  authorities: ['admin', 'user'],
})(BasicList);
