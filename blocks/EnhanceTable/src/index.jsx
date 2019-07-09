import React, { useState } from 'react';
import { Table, Pagination, Tab, Search } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import data from './data';
import styles from './index.module.scss';

export default function EnhanceTable() {
  const [activeKey, setActiveKey] = useState('solved');

  const renderTitle = (value, index, record) => {
    return (
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{record.title}</span>
      </div>
    );
  };

  const editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  const renderOperations = (value, index, record) => {
    return (
      <div
        className={styles.enhanceTableOperation}
      >
        <a
          href="#"
          className={styles.operation}
          target="_blank"
          onClick={(e) => editItem(record, e)}
        >
          解决
        </a>
        <a href="#" className={styles.operation} target="_blank">
          详情
        </a>
        <a href="#" className={styles.operation} target="_blank">
          分类
        </a>
      </div>
    );
  };

  const renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  const fetchData = () => {
    console.log('fetch data');
  };

  const onTabChange = (tabKey) => {
    setActiveKey(tabKey);

    if (tabKey === 'solved') {
      fetchData();
    } else if (tabKey === 'needFix') {
      fetchData();
    } else {
      console.log(`你点击了 ${tabKey}`);
    }
  };

  const onSearch = () => {
    fetchData();
  };

  return (
    <div>
      <IceContainer className={styles.card}>
        <div>
          <Tab
            onChange={onTabChange}
            size="small"
            shape="text"
            activeKey={activeKey}
            contentStyle={{ display: 'none' }}
          >
            <Tab.Item
              key="solved"
              title={
                <span>
                  已解决 <span className={styles.tabCount}>123</span>
                </span>
              }
            />
            <Tab.Item
              key="needFix"
              title={
                <span>
                  待解决 <span className={styles.tabCount}>10</span>
                </span>
              }
            />
            <Tab.Item
              key="needValidate"
              title={
                <span>
                  待验证 <span className={styles.tabCount}>2</span>
                </span>
              }
            />
          </Tab>
        </div>
        <div className={styles.extraFilter}>
          <Search
            className={styles.search}
            type="primary"
            style={{width: 150}}
            placeholder="搜索"
            searchText=""
            onSearch={onSearch}
          />
        </div>
      </IceContainer>
      <IceContainer>
        <Table
          dataSource={data}
          className="basic-table"
          // style={styles.basicTable}
          hasBorder={false}
        >
          <Table.Column
            title="问题描述"
            cell={renderTitle}
            width={320}
          />
          <Table.Column title="问题分类" dataIndex="type" width={85} />
          <Table.Column
            title="发布时间"
            dataIndex="publishTime"
            width={150}
          />
          <Table.Column
            title="状态"
            dataIndex="publishStatus"
            width={85}
            cell={renderStatus}
          />
          <Table.Column
            title="操作"
            dataIndex="operation"
            width={150}
            cell={renderOperations}
          />
        </Table>
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
