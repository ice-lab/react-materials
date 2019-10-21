import React from 'react';

import BasicDetailInfo from './components/BasicDetailInfo';

import CollapseCard from './components/CollapseCard';

import DetailTable from './components/DetailTable';

export default function Profile() {
  return (
    <div className="profile-page">
      <BasicDetailInfo />

      <CollapseCard />

      <DetailTable />
    </div>
  );
}
