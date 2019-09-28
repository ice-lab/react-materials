import React, { useState } from 'react';
import { Input } from '@alifd/next';
import TopBar from '@/components/TopBar';
import GeneralDialog from '@/components/GeneralDialog';
import Card from './components/Card';

const ICONS = ['box', 'process', 'electronics', 'favorite', 'lights', 'auto'];

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 5 }).map((item, index) => {
    return {
      appid: `0000${index + 1}`,
      title: 'NLS',
      desc: '智能语音小助手',
      time: '2018-09-30 14:30:19',
      icon: ICONS[random(0, 5)],
    };
  });
};

export default function Projects() {
  const [cardData, setCadData] = useState(getData());

  const getFormValue = (value) => {
    const data = [...cardData];
    data.push({
      appid: `0000${data.length + 1}`,
      title: value.title,
      desc: value.desc,
      time: '2018-09-30 14:30:19',
      icon: ICONS[random(0, 5)],
    });
    setCadData(data);
  };

  return (
    <div>
      <TopBar
        extraBefore={(
          <Input
            placeholder="请输入关键字进行搜索"
            style={{ width: '240px' }}
          />
        )}
        extraAfter={<GeneralDialog buttonText="新建项目" getFormValue={getFormValue} />}
      />
      <Card data={cardData} />
    </div>
  );
}
