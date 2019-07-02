import React from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';

const CateList = () => {
  const breadcrumb = [
    { text: '分类管理', link: '' },
    { text: '分类列表', link: '#/cate/list' },
  ];
  return (
    <div>
      <CustomBreadcrumb dataSource={breadcrumb} />
      <TabTable />
    </div>
  );
};

export default CateList;
