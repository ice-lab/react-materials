import React, { useState, useEffect } from 'react';
import { Table, Pagination, Search } from '@alifd/next';
import styles from './index.module.scss';
// MOCK 数据，实际业务按需进行替换，
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      application: '淘宝',
      leader: '淘小宝',
      developer: '淘小宝',
      computationalCost: `1${index}`,
      score: `8${index}`,
      task: `12,345${index}`,
      quantity: `3.2${index}`,
      storageCost: '123',
      storage: `109.${index}`,
      storageRate: `71.${index}`,
      totalCost: `32,45${index}`,
      question: `5${index}`,
    };
  });
};

export default function CustomTable() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
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

  const fetchData = async (len) => {
    await setLoading(true);
    mockApi(len).then((mockData) => {
      setLoading(false);
      setData(mockData);
    });
  };

  const handlePaginationChange = (currentPage) => {
    setCurrent(currentPage);
    fetchData();
  };

  const handleFilterChange = () => {
    fetchData(5);
  };

  return (
    <div>
      <div
        className={styles.searchBox}
      >
        <Search
          searchText=""
          type="secondary"
          inputwidth={300}
          placeholder="请输入关键词"
          onChange={handleFilterChange}
        />
      </div>
      <Table
        loading={isLoading}
        dataSource={data}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="应用" dataIndex="application" />
        <Table.Column title="负责人" dataIndex="leader" />
        <Table.Column title="开发人员" dataIndex="developer" />
        <Table.Column title="计算费用(万元)" dataIndex="computationalCost" />
        <Table.Column title="计算分" dataIndex="score" />
        <Table.Column title="任务数量" dataIndex="task" />
        <Table.Column title="计算量(KCU)" dataIndex="quantity" />
        <Table.Column title="存储费用(万元)" dataIndex="storageCost" />
        <Table.Column title="存储量(PB)" dataIndex="storage" />
        <Table.Column title="存储使用率(%)" dataIndex="storageRate" />
        <Table.Column title="总费用(万元)" dataIndex="totalCost" />
        <Table.Column title="问题优化" dataIndex="question" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
