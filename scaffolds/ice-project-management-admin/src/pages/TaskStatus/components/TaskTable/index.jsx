import React, { useState, useEffect, useCallback } from 'react';
import { Table, Pagination, Dialog } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableHead from './TableHead';

import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: `2${index}721${index}`,
      by: '淘小宝',
      to: '淘二宝',
      email: 'admin@gmail.com',
      subject: '项目评估',
      state: '未解决',
      date: `2018-08-1${index}`,
    };
  });
};

export default function TaskTable() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  const fetchData = useCallback(async (len) => {
    await setIsLoading(true);
    mockApi(len).then((newData) => {
      setData(newData);
      setIsLoading(false);
    });
  });

  const handlePaginationChange = async (crt) => {
    await setCurrent(crt);
    fetchData();
  };

  const handleFilterChange = () => {
    fetchData(5);
  };

  const handlePublish = () => {
    Dialog.confirm({
      content: '暂不支持编辑',
    });
  };

  const handleDelete = () => {
    Dialog.confirm({
      content: '确认删除该任务吗',
      onOk: () => {
        fetchData();
      },
    });
  };

  const renderOper = () => {
    return (
      <div>
        <a
          onClick={handlePublish}
          className={styles.btnl}
        >
          编辑
        </a>
        <a
          onClick={handleDelete}
          className={styles.btnr}
        >
          删除
        </a>
      </div>
    );
  };

  const renderState = (value) => {
    return (
      <span className={styles.state}>
        <i className={styles.dot} />
        {value}
      </span>
    );
  };

  return (
    <IceContainer className={styles.container}>
      <h3 className={styles.title}>任务列表</h3>
      <TableHead onChange={handleFilterChange} />
      <Table
        loading={isLoading}
        dataSource={data}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="编号" dataIndex="id" />
        <Table.Column title="Assign By" dataIndex="by" />
        <Table.Column title="Assign To" dataIndex="to" />
        <Table.Column title="邮箱" dataIndex="email" />
        <Table.Column title="标题" dataIndex="subject" />
        <Table.Column title="日期" dataIndex="date" />
        <Table.Column
          title="状态"
          dataIndex="state"
          cell={renderState}
        />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </IceContainer>
  );
}
