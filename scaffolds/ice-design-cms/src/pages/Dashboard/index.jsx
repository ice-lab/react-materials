import React from 'react';
import StatisticalCard from './components/StatisticalCard';
import DataStatistics from './components/DataStatistics';
import RealTimeStatistics from './components/RealTimeStatistics';
import LatestNews from './components/LatestNews';

export default () => (
  <div>
    <StatisticalCard />
    <DataStatistics />
    <RealTimeStatistics />
    <LatestNews />
  </div>
);
