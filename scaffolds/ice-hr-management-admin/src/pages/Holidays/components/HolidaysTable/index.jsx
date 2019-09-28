import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableFilter from './Filter';

import styles from './index.module.scss';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const state = [
  {
    color: '#999',
    text: '已批准',
  },
  {
    color: '#ee706d',
    text: '流程中',
  },
  {
    color: '#5e83fb',
    text: '已撤回',
  },
];

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: index + 1,
      type: ['休年假', '事假', '调休'][random(0, 2)],
      startTime: `20${random(10, 20)}-0${random(1, 9)}-12`,
      endTime: `20${random(10, 20)}-0${random(1, 9)}-18`,
      days: random(1, 10),
      origin: ['本人提交', '电话申请'][random(0, 1)],
      state: state[random(0, 2)],
    };
  });
};

export default function HolidaysTable() {
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

  function renderState(value) {
    return (
      <span
        style={{
          background: value.color,
        }}
        className={styles.renderState}
      >
        {value.text}
      </span>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>请假记录</h4>
      <TableFilter onChange={handleFilterChange} />
      <Table
        loading={isLoading}
        dataSource={dataSource}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="索引" dataIndex="id" />
        <Table.Column title="假期类型" dataIndex="type" />
        <Table.Column title="开始日期" dataIndex="startTime" />
        <Table.Column title="结束时间" dataIndex="endTime" />
        <Table.Column title="请假天数" dataIndex="days" />
        <Table.Column title="假期来源" dataIndex="origin" />
        <Table.Column
          title="状态"
          dataIndex="state"
          cell={renderState}
        />
      </Table>
      <Pagination
        className={styles.pagination}
        current={currentPage}
        onChange={handlePaginationChange}
      />
    </IceContainer>
  );
}
