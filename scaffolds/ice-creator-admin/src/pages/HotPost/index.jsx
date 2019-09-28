import React from 'react';
import HotPostRank from './components/HotPostRank';
import HotRank from './components/HotRank';
import OverviewChart from './components/OverviewChart';

export default function HotPost() {
  return (
    <div>
      <OverviewChart />
      <HotPostRank />
      <HotRank />
    </div>
  );
}
