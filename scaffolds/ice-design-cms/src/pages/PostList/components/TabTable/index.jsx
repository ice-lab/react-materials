import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import axios from 'axios';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const TabPane = Tab.Item;

const tabs = [
  { tab: '全部', key: 'all' },
  { tab: '已发布', key: 'released' },
  { tab: '审核中', key: 'review' },
  { tab: '已拒绝', key: 'rejected' },
];

export default function TabTable() {
  const [dataSource, setDataSource] = useState({});
  const [tabKey, setTabKey] = useState('all');

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: 200,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      width: 150,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 150,
    },
    {
      title: '发布时间',
      dataIndex: 'date',
      key: 'date',
      width: 150,
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

  useEffect(() => {
    axios
      .get('/mock/tab-table.json')
      .then((response) => {
        setDataSource(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getFormValues = (dataIndex, values) => {
    dataSource[tabKey][dataIndex] = values;
    setDataSource({ ...dataSource });
  };

  const handleRemove = (value, index) => {
    dataSource[tabKey].splice(index, 1);
    setDataSource({ ...dataSource });
  };

  const handleTabChange = (key) => {
    setTabKey(key);
  };

  return (
    <div className="tab-table">
      <IceContainer style={{ padding: '0 20px 20px' }}>
        <Tab onChange={handleTabChange}>
          {tabs.map((item) => {
            return (
              <TabPane title={item.tab} key={item.key}>
                <CustomTable
                  dataSource={dataSource[tabKey]}
                  columns={columns}
                  hasBorder={false}
                />
              </TabPane>
            );
          })}
        </Tab>
      </IceContainer>
    </div>
  );
}
