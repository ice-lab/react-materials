import React from 'react';

import BasicIndicator from './components/BasicIndicator';
import AccessTrend from './components/AccessTrend';
import AccessSource from './components/AccessSource';

export default function TrafficStatistics() {
  return (
    <div>
      <BasicIndicator />
      <AccessTrend />
      <AccessSource />
    </div>
  );
}
