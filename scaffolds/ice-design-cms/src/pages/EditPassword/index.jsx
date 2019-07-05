import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import ChangePasswordForm from './components/ChangePasswordForm';

export default function EditPassword() {
  const breadcrumb = [
    { text: '用户管理', link: '' },
    { text: '修改密码', link: '#/user/list' },
  ];
  return (
    <div className="edit-password-page">
      <CustomBreadcrumb dataSource={breadcrumb} />
      <ChangePasswordForm />
    </div>
  );
}
