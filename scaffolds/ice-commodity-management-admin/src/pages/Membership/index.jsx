import React from 'react';
import Table from './components/Table';
import PageHead from '../../components/PageHead';

export default function Membership() {
  return (
    <div>
      <PageHead title="会员管理" />
      <Table />
    </div>
  );
}
