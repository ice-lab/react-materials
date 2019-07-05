import React from 'react';
import AccountBadge from './components/AccountBadge';
import AccountStatus from './components/AccountStatus';
import AccountFeatures from './components/AccountFeatures';

export default function Status() {
  return (
    <div>
      <AccountBadge />
      <AccountStatus />
      <AccountFeatures />
    </div>
  );
}
