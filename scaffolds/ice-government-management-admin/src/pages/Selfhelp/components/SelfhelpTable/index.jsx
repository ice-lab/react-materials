import React, { useState } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import SearchBar from './SearchBar';
import styles from './index.module.scss';

const mockData = [
  {
    number: '浙执77号',
    resource: '执行',
    applicant: '淘小宝',
    date: '2018-10-10',
    status: '申请立案',
  },
  {
    number: '浙执78号',
    resource: '执行',
    applicant: '淘小宝',
    date: '2018-10-10',
    status: '诉前调解',
  },
  {
    number: '浙执79号',
    resource: '执行',
    applicant: '淘小宝',
    date: '2018-10-10',
    status: '诉前调解',
  },
  {
    number: '浙执80号',
    resource: '执行',
    applicant: '淘小宝',
    date: '2018-10-10',
    status: '申请立案',
  },
  {
    number: '浙执81号',
    resource: '执行',
    applicant: '淘小宝',
    date: '2018-10-10',
    status: '申请立案',
  },
];

export default function SelfhelpTable() {
  const [current, setCurrent] = useState(2);

  const onPageChange = (currentPage) => {
    setCurrent(currentPage);
  };

  const handleClick = () => {
    Message.success('暂不支持办理');
  };

  const actionRender = () => {
    return (
      <Button className={styles.button} onClick={handleClick}>
        办理
      </Button>
    );
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <Table dataSource={mockData} primaryKey="number" className={styles.table}>
        <Table.Column align="center" title="案号" dataIndex="number" />
        <Table.Column align="center" title="案件来源" dataIndex="resource" />
        <Table.Column align="center" title="登记人" dataIndex="applicant" />
        <Table.Column align="center" title="收案日期" dataIndex="date" />
        <Table.Column align="center" title="案件状态" dataIndex="status" />
        <Table.Column align="center" title="操作" cell={actionRender} />
      </Table>
      <div className={styles.pagination}>
        <Pagination
          current={current}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}
