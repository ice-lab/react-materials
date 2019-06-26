import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import GeneralDialog from '../../components/GeneralDialog';
import FunctionTable from './components/FunctionTable';
import mockdata from './data';

export default function Functions() {
  const [tableData, setTableData] = useState(mockdata); // MOCK 数据，实际业务按需进行替换

  const getFormValue = (value) => {
    const data = [...tableData];
    data.push({
      id: data.length + 1,
      name: value.title,
      desc: value.desc,
      language: 'NodeJS 8.x',
      skill: '无',
      status: '未发布',
    });
    setTableData(data);
  };
  return (
    <div>
      <TopBar title="函数管理" extraAfter={<GeneralDialog buttonText="添加函数" getFormValue={getFormValue} />} />
      <FunctionTable data={tableData} />
    </div>
  );
}
