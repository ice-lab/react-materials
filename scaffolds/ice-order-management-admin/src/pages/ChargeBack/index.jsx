import React from 'react';
import PageHead from '@/components/PageHead';
import ChargeBackTable from './components/ChargeBackTable';

export default function ChargeBack() {
  return (
    <div>
      <PageHead title="退单管理" />
      <ChargeBackTable />
    </div>
  );
}
