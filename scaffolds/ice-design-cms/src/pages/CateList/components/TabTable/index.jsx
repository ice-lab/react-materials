import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const MOCK_DATA = [
  {
    name: '前端',
    shortName: 'frontEnd',
    articleNum: '2',
  },
  {
    name: '后端',
    shortName: 'backEnd',
    articleNum: '3',
  },
  {
    name: '开发工具',
    shortName: 'tool',
    articleNum: '10',
  },
  {
    name: '数据库',
    shortName: 'database',
    articleNum: '26',
  },
  {
    name: '系统',
    shortName: 'system',
    articleNum: '18',
  },
  {
    name: '服务器',
    shortName: 'server',
    articleNum: '6',
  },
  {
    name: '框架',
    shortName: 'framework',
    articleNum: '39',
  },
  {
    name: '其他',
    shortName: 'other',
    articleNum: '52',
  },
];

export default function TabTable() {
  const [dataSource, setDataSource] = useState(MOCK_DATA);
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: '缩写名',
      dataIndex: 'shortName',
      key: 'shortName',
      width: 150,
    },
    {
      title: '文章数',
      width: 150,
      dataIndex: 'articleNum',
      key: 'articleNum',
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

  function getFormValues(dataIndex, values) {
    dataSource[dataIndex] = values;
    setDataSource([...dataSource]);
  }

  function handleRemove(value, index) {
    dataSource.splice(index, 1);
    setDataSource([...dataSource]);
  }

  return (
    <div className="tab-table">
      <IceContainer>
        <CustomTable
          dataSource={dataSource}
          columns={columns}
          hasBorder={false}
        />
      </IceContainer>
    </div>
  );
}
