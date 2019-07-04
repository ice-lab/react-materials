import React from 'react';
import Filter from './components/Filter';
import Overview from './components/Overview';
import TrendAnalysis from './components/TrendAnalysis';
import BaseInfo from '@/components/BaseInfo';

export default function TeamManage() {
  return (
    <div>
      <Filter />
      <Overview />
      <BaseInfo />
      <TrendAnalysis />
    </div>
  );
}
