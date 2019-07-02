import React, { Component } from 'react';

import Filter from './components/Filter';
import Overview from './components/Overview';
import HealthAnalysis from './components/HealthAnalysis';
import ApplicationAnalysis from './components/ApplicationAnalysis';
import BaseInfo from '@/components/BaseInfo';

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
