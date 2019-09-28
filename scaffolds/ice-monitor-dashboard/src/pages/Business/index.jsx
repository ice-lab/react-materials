import React from 'react';

import Overview from './components/Overview';
import LatestActivity from './components/LatestActivity';
import NewUsers from './components/NewUsers';

export default function Business() {
  return (
    <div>
      <Overview />
      <LatestActivity />
      <NewUsers />
    </div>
  );
}
