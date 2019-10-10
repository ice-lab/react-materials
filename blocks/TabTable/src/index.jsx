import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import data from './data';
import styles from './index.module.scss';

const TabPane = Tab.Item;

const tabs = [
  { tab: '全部', key: 'all' },
  { tab: '已发布', key: 'inreview' },
  { tab: '审核中', key: 'released' },
  { tab: '已拒绝', key: 'rejected' },
];

export default function TabTable() {
  const [dataSource, setData] = useState(data);
  const [tabKey, setTabKey] = useState('all');

  const getFormValues = (dataIndex, values) => {
    dataSource[tabKey][dataIndex] = values;
    setData(dataSource);
  };

  const handleRemove = (value, index) => {
    dataSource[tabKey].splice(index, 1);
    setData(dataSource);
  };

  const handleTabChange = (key) => {
    setTabKey(key);
  };

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '发布时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      key: 'action',
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
    <div style={styles.tabtable}>
      <IceContainer>
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
