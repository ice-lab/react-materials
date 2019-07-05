import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import TabTable from './components/TabTable';

export default function PostList() {
  const breadcrumb = [
    { text: '文章管理', link: '' },
    { text: '文章列表', link: '#/post/list' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <TabTable />
    </div>
  );
}
