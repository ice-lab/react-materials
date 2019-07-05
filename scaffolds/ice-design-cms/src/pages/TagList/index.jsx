import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import TabTable from './components/TabTable';

export default function TagList() {
  const breadcrumb = [
    { text: '标签管理', link: '' },
    { text: '标签列表', link: '#/tag/list' },
  ];
  return (
    <div className="tag-list-page">
      <CustomBreadcrumb dataSource={breadcrumb} />
      <TabTable />
    </div>
  );
}
