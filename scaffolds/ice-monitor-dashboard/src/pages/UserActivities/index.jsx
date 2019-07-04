import React from 'react';

import BasicIndicator from './components/BasicIndicator';
import UserTrend from './components/UserTrend';
import AccessDistribution from './components/AccessDistribution';

export default function UserActivities() {
  return (
    <div>
      <BasicIndicator />
      <UserTrend />
      <AccessDistribution />
    </div>
  );
}
