import React from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import UserForm from './components/UserForm';

const CreateUser = () => {
  const breadcrumb = [
    { text: '用户管理', link: '' },
    { text: '添加用户', link: '#/user/list' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <UserForm />
    </div>
  );
};

export default CreateUser;
