import React from 'react';
import Table from './components/Table';
import { withAuth } from '@/components/Auth';

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
