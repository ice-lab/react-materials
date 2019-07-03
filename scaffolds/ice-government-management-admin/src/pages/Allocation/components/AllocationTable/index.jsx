import React, { useState } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import styles from './index.module.scss';

const mockData = [
  {
    number: '( 2018 ) 浙执1号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '业务庭分案',
  },
  {
    number: '( 2018 ) 浙执2号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '办理中',
  },
  {
    number: '( 2018 ) 浙执3号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '申请归档',
  },
  {
    number: '( 2018 ) 浙执4号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '申请报结',
  },
  {
    number: '( 2018 ) 浙执5号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '立案',
  },
  {
    number: '( 2018 ) 浙执6号',
    applicant: '淘小宝',
    execution: '某某科技公司',
    department: '执行局',
    holder: '淘小宝',
    status: '办理中',
  },
];

export default function AllocationTable() {
  const [current, setCurrent] = useState(1);

  const handleClick = () => {
    Message.success('需要管理员账户才能分配账号');
  };

  const onPageChange = (currentPage) => {
    setCurrent(currentPage);
  };

  const actionRender = () => {
    return (
      <Button className={styles.button} onClick={handleClick}>
        分配账号
      </Button>
    );
  };

  return (
    <div className={styles.container}>
      <Table dataSource={mockData} primaryKey="number" className={styles.table}>
        <Table.Column align="center" title="案号" dataIndex="number" />
        <Table.Column align="center" title="申请人" dataIndex="applicant" />
        <Table.Column align="center" title="被执行人" dataIndex="execution" />
        <Table.Column
          align="center"
          title="承办部门"
          dataIndex="department"
        />
        <Table.Column align="center" title="承办人" dataIndex="holder" />
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
