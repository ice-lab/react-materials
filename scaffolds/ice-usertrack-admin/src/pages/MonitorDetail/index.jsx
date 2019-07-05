import React from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import BaseInfo from './components/BaseInfo';
import TrackTab from './components/TrackTab';
import TrackTable from './components/TrackTable';

export default function MonitorDetail() {
  const breadcrumb = [
    {
      link: '/#/application/monitor',
      text: '应用监控',
    },
    {
      link: '',
      text: '监控详情',
    },
  ];
  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="监控详情" />
      <BaseInfo />
      <TrackTab />
      <TrackTable />
    </div>
  );
}
