import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from '@/components/CustomTable';
import TableFilter from '../TableFilter';
import styles from './index.module.scss';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: index + 1,
      time: `${index + 1} 分钟前`,
      repo: 'alibaba/ice',
      username: '淘小宝',
      client: 'travis-ci',
      builder: '@ice/ice-scripts',
      builderTime: `1${index}s`,
      state: '成功',
    };
  });
};

export default function TaskTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  function mockApi(len) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  }

  async function fetchData(len) {
    await setIsLoading(true);
    const d = await mockApi(len);
    setData(d);
    setIsLoading(false);
  }

  function handleSubmit() {
    fetchData(5);
  }

  function renderState(value) {
    return (
      <div className={styles.state}>
        <span className={styles.stateText}>
          {value}
        </span>
      </div>
    );
  }

  function renderOper() {
    return (
      <div className={styles.oper}>
        <a href="/">
          查看
        </a>
      </div>
    );
  }

  function columnsConfig() {
    return [
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '仓库',
        dataIndex: 'repo',
        key: 'repo',
      },
      {
        title: '用户',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Client',
        dataIndex: 'client',
        key: 'client',
      },
      {
        title: '构建器',
        dataIndex: 'builder',
        key: 'builder',
      },
      {
        title: '构建时长',
        dataIndex: 'builderTime',
        key: 'builderTime',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        cell: renderState,
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        cell: renderOper,
      },
    ];
  }

  useEffect(() => {
    fetchData(10);
  }, [fetchData]);

  return (
    <IceContainer>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>构建任务</div>
      </div>
      <TableFilter handleSubmit={handleSubmit} />
      <CustomTable
        columns={columnsConfig()}
        dataSource={data}
        isLoading={isLoading}
        onChange={fetchData}
      />
    </IceContainer>
  );
}
