import React from 'react';

import BasicIndicator from './components/BasicIndicator';
import UserTrend from './components/UserTrend';

export default function UserStatistics() {
  return (
    <div>
      <BasicIndicator />
      <UserTrend />
    </div>
  );
}
