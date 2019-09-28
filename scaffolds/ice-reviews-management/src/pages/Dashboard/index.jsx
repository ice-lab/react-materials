import React from 'react';

import ReviewDataChart from './components/ReviewDataChart';
import ReviewDetailInfo from './components/ReviewDetailInfo';
import ReviewOverview from './components/ReviewOverview';
import ReviewRequestTable from './components/ReviewRequestTable';

export default function Dashboard() {
  return (
    <div>
      <ReviewOverview />
      <ReviewDetailInfo />
      <ReviewRequestTable />
      <ReviewDataChart />
    </div>
  );
}
