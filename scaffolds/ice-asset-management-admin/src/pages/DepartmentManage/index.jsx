import React from 'react';

import BaseInfo from '@/components/BaseInfo';
import Filter from './components/Filter';
import Overview from './components/Overview';
import HealthAnalysis from './components/HealthAnalysis';
import ApplicationAnalysis from './components/ApplicationAnalysis';

export default function DepartmentManage() {
  return (
    <div>
      <Filter />
      <Overview />
      <BaseInfo />
      <HealthAnalysis />
      <ApplicationAnalysis />
    </div>
  );
}
