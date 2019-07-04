import React from 'react';
import Overview from './components/Overview';
import YearsAnalysis from './components/YearsAnalysis';
import BudgetManage from './components/BudgetManage';

export default function Home() {
  return (
    <div>
      <Overview />
      <YearsAnalysis />
      <BudgetManage />
    </div>
  );
}
