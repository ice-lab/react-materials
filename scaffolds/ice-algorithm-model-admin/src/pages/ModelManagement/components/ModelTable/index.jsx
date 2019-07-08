import React, { useState, useEffect } from 'react';
import { Table, Pagination, Dialog, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableHead from './TableHead';
import styles from './table.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      modelName: '强化学习',
      version: `0.0.${index + 1}`,
      updateTime: '2018-08-20',
      createTime: '2018-08-18',
      creator: '淘小宝',
      state: '待上线',
    };
  });
};

export default function ModelTable() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function mockApi(len) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  }

  async function fetchData(len) {
    await setLoading(true);
    mockApi(len).then((mockData) => {
      setData(mockData);
      setLoading(false);
    });
  }

  async function handlePaginationChange(currentPage) {
    await setCurrent(currentPage);
    fetchData();
  }

  function handleFilterChange() {
    fetchData(5);
  }

  function handlePublish() {
    Dialog.confirm({
      content: '确认发布线上吗',
      onOk: () => {
        fetchData();
      },
    });
  }

  function handleDelete() {
    Dialog.confirm({
      content: '确认删除该模型吗',
      onOk: () => {
        fetchData();
      },
    });
  }

  function renderOper() {
    return (
      <div>
        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={handlePublish}
        >
          发布
        </Button>
        <Button type="primary" warning onClick={handleDelete}>
          删除
        </Button>
      </div>
    );
  }

  function renderState(value) {
    return (
      <span className={styles.state}>
        <i className={styles.dot} />
        {value}
      </span>
    );
  }

  return (
    <IceContainer className={styles.container}>
      <h3 className={styles.title}>模型列表</h3>
      <TableHead onChange={handleFilterChange} />
      <Table
        loading={isLoading}
        dataSource={data}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="模型服务" dataIndex="modelName" />
        <Table.Column title="最新版本" dataIndex="version" />
        <Table.Column title="更新时间" dataIndex="updateTime" />
        <Table.Column title="创建时间" dataIndex="createTime" />
        <Table.Column title="创建人" dataIndex="creator" />
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
