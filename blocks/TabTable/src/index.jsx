import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import data from './data';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import styles from './index.module.scss';

const TabPane = Tab.Item;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const tabs = [
  { tab: '全部', key: 'all' },
  { tab: '已发布', key: 'released' },
  { tab: '审核中', key: 'review' },
  { tab: '已拒绝', key: 'rejected' },
];

export default function TabTable() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState({});
  const [tabKey, setTabKey] = useState('all');

  const fetchData = async () => {
    setLoading(true);
    await sleep(500);
    setLoading(false);
    setDataSource(data);
  }
  useEffect(() => {
    fetchData(data)
  }, []);

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
        <h4 className={styles.title}>Tab 类型的表格</h4>
        <Tab onChange={handleTabChange}>
          {tabs.map((item) => {
            return (
              <TabPane title={item.tab} key={item.key}>
                <CustomTable
                  dataSource={dataSource[tabKey]}
                  loading={loading}
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
