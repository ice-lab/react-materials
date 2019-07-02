import React from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import SettingsForm from './components/SettingsForm';

const BasicSetting = () => {
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
};
export default BasicSetting;
