import React from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import CardList from './components/CardList';

export default function Monitor() {
  const breadcrumb = [
    {
      link: '/#/monitor/version',
      text: '埋点监控',
    },
    {
      link: '',
      text: '应用版本',
    },
  ];

  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="应用版本" />
      <CardList />
    </div>
  );
}
