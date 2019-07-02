import React from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import SimpleFluencyForm from './components/SimpleFluencyForm';

const CreateTag = () => {
  const breadcrumb = [
    { text: '标签管理', link: '' },
    { text: '添加标签', link: '#/tag/create' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <SimpleFluencyForm />
    </div>
  );
};

export default CreateTag;
