import React from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import Filter from './components/Filter';
import Form from './components/Form';

export default function AutoTest() {
  const breadcrumb = [
    {
      link: '/#/validate/autotest',
      text: ' 埋点验证',
    },
    {
      link: '',
      text: '自动化验证',
    },
  ];

  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="自动化验证" />
      <Filter />
      <Form />
    </div>
  );
}
