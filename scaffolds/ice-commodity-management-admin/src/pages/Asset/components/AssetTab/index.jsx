import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableFilter from './TableFilter';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      applyTime: `2018-12-1${random(1, 9)}`,
      transactionId: random(10000000, 100000000),
      amount: random(1000, 10000),
      endTime: `2019-06-1${random(1, 9)}`,
      applicant: ['淘小宝', '淘二宝'][random(0, 1)],
      state: ['已完成', '申请中'][random(0, 1)],
    };
  });
};


export default function MembersshipTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  const fetchData = (len) => {
    setLoading(true);
    mockApi(len).then((data) => {
      setLoading(false);
      setDataSource(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePaginationChange = (current) => {
    setCurrentPage(current);
    fetchData();
  };

  const handleFilterChange = () => {
    fetchData(5);
  };

  return (
    <div>
      <TableFilter onChange={handleFilterChange} />
      <IceContainer>
        <Table loading={isLoading} dataSource={dataSource} hasBorder={false}>
          <Table.Column title="申请时间" dataIndex="applyTime" />
          <Table.Column title="交易号" dataIndex="transactionId" />
          <Table.Column title="金额(万元)" dataIndex="amount" />
          <Table.Column title="处理完成时间" dataIndex="endTime" />
          <Table.Column title="申请人" dataIndex="applicant" />
          <Table.Column title="状态" dataIndex="state" />
        </Table>
        <Pagination
          className={styles.pagination}
          current={currentPage}
          onChange={handlePaginationChange}
        />
      </IceContainer>
    </div>
  );
}
