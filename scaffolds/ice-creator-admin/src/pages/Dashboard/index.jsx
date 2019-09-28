import React from 'react';
import UserLanding from './components/UserLanding';
import DataOverview from './components/DataOverview';
import NoticeList from './components/NoticeList';

export default function Dashboard() {
  return (
    <div>
      <UserLanding />
      <DataOverview />
      <NoticeList />
    </div>
  );
}
