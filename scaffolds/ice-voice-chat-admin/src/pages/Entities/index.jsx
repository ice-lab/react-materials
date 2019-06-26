import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import GeneralDialog from '../../components/GeneralDialog';
import EntitlesTable from './components/EntitlesTable';
import mockdata from './data';

export default function Entities() {
  const [tableData, setTableData] = useState(mockdata);

  const getFormValue = (value) => {
    const data = [...tableData];
    data.push({
      id: data.length + 1,
      name: value.title,
      desc: value.desc,
      preview: '--',
      skill: '无',
    });
    setTableData(data);
  };
  return (
    <div>
      <TopBar
        title="实体管理（Entities）"
        extraAfter={<GeneralDialog buttonText="新建实体" getFormValue={getFormValue} />}
      />
      <EntitlesTable data={tableData} />
    </div>
  );
}
