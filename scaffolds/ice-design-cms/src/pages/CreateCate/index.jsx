import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import SimpleFluencyForm from './components/SimpleFluencyForm';

export default function CreateCate() {
  const breadcrumb = [
    { text: '分类管理', link: '' },
    { text: '添加分类', link: '#/cate/list' },
  ];
  return (
    <div className="create-cate-page">
      <CustomBreadcrumb dataSource={breadcrumb} />
      <SimpleFluencyForm />
    </div>
  );
}
