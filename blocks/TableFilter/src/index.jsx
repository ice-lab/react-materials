import React from 'react';
import CustomTable from './CustomTable';
import Filter from './Filter';

export default function TableFilter() {
  return (
    <div>
      <Filter />
      <CustomTable />
    </div>
  );
}
