import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import EditableTable from './components/EditableTable';

export default function NavigationSetting() {
  const breadcrumb = [
    { text: '通用设置', link: '' },
    { text: '菜单设置', link: '#/setting/navigation' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <EditableTable />
    </div>
  );
}
