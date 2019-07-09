import React from 'react';
import { Transfer } from '@alifd/next';
import IceContainer from '@icedesign/container';

const mockData = () => {
  const dataSource = [];

  for (let i = 0; i < 10; i += 1) {
    dataSource.push({
      label: `Task${i + 1}`,
      value: `${i}`,
      disabled: i % 4 === 0,
    });
  }

  return dataSource;
};

export default function SimpleTransfer() {
  const handleChange = (value, data, extra) => {
    console.log(value, data, extra);
  };

  return (
    <IceContainer>
      <Transfer
        listStyle={{ width: '540px', height: '192px' }}
        defaultValue={['9']}
        dataSource={mockData()}
        titles={['任务列表', '完成列表']}
        onChange={handleChange}
      />
    </IceContainer>
  );
}
