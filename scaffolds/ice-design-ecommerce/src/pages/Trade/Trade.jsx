import React from 'react';
import Overview from './components/Overview';
import CostOverview from './components/CostOverview';
import TradingTrends from './components/TradingTrends';

export default function Trade() {
  return (
    <div>
      <Overview />
      <CostOverview />
      <TradingTrends />
    </div>
  );
}
Trade.displayName = 'Trade';
