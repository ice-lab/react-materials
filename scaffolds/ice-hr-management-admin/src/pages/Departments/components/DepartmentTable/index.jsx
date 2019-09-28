import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableFilter from './Filter';
import styles from './index.module.scss';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      index: random(10000, 100000),
      name: ['客户端部门', '前端部门', '设计部门', '运营部门', 'IOT 部门'][
        random(0, 4)
      ],
      lead: ['淘小宝', '淘二宝'][random(0, 1)],
      total: random(100, 200),
      createTime: `20${random(10, 20)}-0${random(1, 9)}-12`,
    };
  });
};

export default function DepartmentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  function mockApi(len) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  }

  function fetchData(len) {
    setLoading(true);
    mockApi(len).then((data) => {
      setLoading(false);
      setDataSource(data);
    });
  }

  function handlePaginationChange(current) {
    setCurrentPage(current);
    fetchData();
  }

  function handleFilterChange() {
    fetchData(5);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>部门列表</h4>
      <TableFilter onChange={handleFilterChange} />
      <Table
        loading={isLoading}
        dataSource={dataSource}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="编号" dataIndex="index" />
        <Table.Column title="部门名称" dataIndex="name" />
        <Table.Column title="部门主管" dataIndex="lead" />
        <Table.Column title="部门人数" dataIndex="total" />
        <Table.Column title="成立时间" dataIndex="createTime" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={currentPage}
        onChange={handlePaginationChange}
      />
    </IceContainer>
  );
}
