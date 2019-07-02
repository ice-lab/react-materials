import React from 'react';
import Filter from './components/Filter';
import QualityTable from './components/QualityTable';
import QualityTrend from './components/QualityTrend';

export default function QualityManage() {
  return (
    <div>
      <Filter />
      <QualityTable />
      <QualityTrend />
    </div>
  );
}
