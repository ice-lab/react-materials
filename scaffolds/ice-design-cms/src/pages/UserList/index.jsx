import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import TabTable from './components/TabTable';

export default function UserList() {
  const breadcrumb = [
    { text: '用户管理', link: '' },
    { text: '用户列表', link: '#/user/list' },
  ];
  return (
    <div className="user-list-page">
      <CustomBreadcrumb dataSource={breadcrumb} />
      <TabTable />
    </div>
  );
}
