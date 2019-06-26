import React, { useState } from 'react';
import { Button, Message } from '@alifd/next';
import TopBar from '../../components/TopBar';
import GeneralDialog from '../../components/GeneralDialog';
import Tabs from './components/Tabs';

const mockData = [
  {
    name: 'joke',
    desc: '笑话',
    tag: '预置',
  },
  {
    name: 'weather',
    desc: '天气',
    tag: '预置',
  },
];

export default function Skill() {
  const [skillData, setSkillData] = useState(mockData);

  const handleImport = () => {
    Message.error('暂不支持导入');
  };

  const getFormValue = (value) => {
    const data = [...skillData];
    data.push({
      name: value.title,
      desc: value.desc,
      tag: '预置',
    });
    setSkillData(data);
  };

  return (
    <div>
      <TopBar
        title="全部技能"
        extraAfter={(
          <div style={{ display: 'flex' }}>
            <Button
              type="normal"
              style={{ marginRight: '10px' }}
              onClick={handleImport}
            >
              导入技能
            </Button>
            <GeneralDialog buttonText="新建技能" getFormValue={getFormValue} />
          </div>
        )}
      />
      <Tabs data={skillData} />
    </div>
  );
}
