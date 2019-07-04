import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const MOCK_DATA = [
  {
    title: '话题一',
    name: '淘小宝',
    num: '1000',
  },
  {
    title: '话题二',
    name: '淘小宝',
    num: '2000',
  },
  {
    title: '话题三',
    name: '淘小宝',
    num: '3000',
  },
  {
    title: '话题四',
    name: '淘小宝',
    num: '1500',
  },
  {
    title: '话题五',
    name: '淘小宝',
    num: '500',
  },
  {
    title: '话题六',
    name: '淘小宝',
    num: '1000',
  },
  {
    title: '话题七',
    name: '淘小宝',
    num: '3000',
  },
  {
    title: '其他',
    name: '淘小宝',
    num: '1000',
  },
];

export default function TabTable() {
  const [dataSource, setDataSource] = useState(MOCK_DATA);

  const getFormValues = (dataIndex, values) => {
    const data = [...dataSource];
    data[dataIndex] = values;
    setDataSource(data);
  };

  const handleRemove = (value, index) => {
    const data = [...dataSource];
    data.splice(index, 1);
    setDataSource(data);
  };

  const columns = [
    {
      title: '话题',
      dataIndex: 'title',
      key: 'name',
      width: 150,
    },
    {
      title: '创建人',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: '评测人数',
      width: 150,
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: (value, index, record) => {
        return (
          <span>
            <EditDialog
              index={index}
              record={record}
              getFormValues={getFormValues}
            />
            <DeleteBalloon
              handleRemove={() => handleRemove(value, index, record)}
            />
          </span>
        );
      },
    },
  ];
  return (
    <div className="tab-table">
      <IceContainer title="话题列表">
        <CustomTable
          dataSource={dataSource}
          columns={columns}
          hasBorder={false}
        />
      </IceContainer>
    </div>
  );
}
