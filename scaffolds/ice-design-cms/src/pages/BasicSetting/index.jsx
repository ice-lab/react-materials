import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import SettingsForm from './components/SettingsForm';

export default function BasicSetting() {
  const breadcrumb = [
    { text: '通用设置', link: '' },
    { text: '基本设置', link: '#/setting/basic' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <SettingsForm />
    </div>
  );
}
