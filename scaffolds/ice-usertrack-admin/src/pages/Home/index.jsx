import React from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import AppKey from './components/AppKey';

export default function Home() {
  const breadcrumb = [
    {
      link: '/#/application/monitor',
      text: '应用监控',
    },
    {
      link: '',
      text: '无线接入',
    },
  ];
  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="无线接入" />
      <AppKey />
    </div>
  );
}
