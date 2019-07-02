import React, { useState } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import styles from './index.module.scss';

const mockData = [
  {
    number: '浙执78号',
    applicant: '淘小宝',
    execution: '某某公司',
    contracting: '淘小宝',
    date: '2018-10-10',
  },
  {
    number: '浙执79号',
    applicant: '淘小宝',
    execution: '某某公司',
    contracting: '淘小宝',
    date: '2018-10-10',
  },
  {
    number: '浙执80号',
    applicant: '淘小宝',
    execution: '某某公司',
    contracting: '淘小宝',
    date: '2018-10-10',
  },
  {
    number: '浙执81号',
    applicant: '淘小宝',
    execution: '某某公司',
    contracting: '淘小宝',
    date: '2018-10-10',
  },
  {
    number: '浙执82号',
    applicant: '淘小宝',
    execution: '某某公司',
    contracting: '淘小宝',
    date: '2018-10-10',
  },
];

export default function BatchTable() {
  const onTableChange = (ids, records) => {
    rowSelection.selectedRowKeys = ids;
    console.log('onChange', ids, records);
    setRowSelection({ rowSelection });
  };

  const [rowSelection, setRowSelection] = useState({
    onChange: onTableChange,
    onSelect: (selected, record, records) => {
      console.log('onSelect', selected, record, records);
    },
    onSelectAll: (selected, records) => {
      console.log('onSelectAll', selected, records);
    },
    selectedRowKeys: [],
  });
  const [current, setCurrent] = useState(2);

  const onPageChange = (current) => {
    setCurrent(current);
  };

  const handleClick = () => {
    Message.success('您暂无无权限查看');
  };

  const actionRender = () => {
    return (
      <Button className={styles.button} onClick={handleClick}>
        查看
      </Button>
    );
  };

  return (
    <div className={styles.container}>
      <Table
        dataSource={mockData}
        primaryKey="number"
        rowSelection={rowSelection}
        className={styles.table}
      >
        <Table.Column align="center" title="案号" dataIndex="number" />
        <Table.Column align="center" title="申请人" dataIndex="applicant" />
        <Table.Column align="center" title="被执行人" dataIndex="execution" />
        <Table.Column
          align="center"
          title="执预承办人"
          dataIndex="contracting"
        />
        <Table.Column align="center" title="立案日期" dataIndex="date" />
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


