import React from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import CardList from './components/CardList';

export default function Combine() {
  const breadcrumb = [
    {
      link: '/#/maintain/scheme',
      text: '埋点维护',
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
