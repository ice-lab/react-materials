import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import GeneralDialog from '@/components/GeneralDialog';
import GeneralizationTable from './components/GeneralizationTable';

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      id: index + 1,
      name: `USER.SYN.10${index}`,
      desc: '规则描述',
      words: '--',
      skill: '无',
    };
  });
};

export default function Generalization() {
  const [tableData, setTableData] = useState(getData());

  const getFormValue = (value) => {
    const data = [...tableData];
    data.push({
      id: data.length + 1,
      name: value.title,
      desc: value.desc,
      words: '--',
      skill: '无',
    });
    setTableData(data);
  };

  return (
    <div>
      <TopBar
        title="泛化规则管理（Generalization）"
        extraAfter={<GeneralDialog buttonText="新建规则" getFormValue={getFormValue} />}
      />
      <GeneralizationTable data={tableData} />
    </div>
  );
}
