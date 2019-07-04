import React, { useState } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import styles from './index.module.scss';

const mockData = [
  {
    number: '( 2018 ) 浙执77号',
    reason: '拆迁',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
  {
    number: '( 2018 ) 浙执78号',
    reason: '赔偿',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
  {
    number: '( 2018 ) 浙执79号',
    reason: '绿化',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
  {
    number: '( 2018 ) 浙执80号',
    reason: '拆迁',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
  {
    number: '( 2018 ) 浙执81号',
    reason: '拆迁',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
  {
    number: '( 2018 ) 浙执82号',
    reason: '赔偿',
    date: '2018-10-10',
    holder: '淘小宝',
    department: '执行局',
  },
];

export default function DismantlingTable() {
  const [rowSelection, setRowSelection] = useState({
    onChange: onTableChange,
    onSelect(selected, record, records) {
      console.log('onSelect', selected, record, records);
    },
    onSelectAll(selected, records) {
      console.log('onSelectAll', selected, records);
    },
    selectedRowKeys: [],
    mode: 'single',
  });
  const [current, setCurrent] = useState(2);

  const onTableChange = (ids, records) => {
    rowSelection.selectedRowKeys = ids;
    console.log('onChange', ids, records);
    setRowSelection(rowSelection);
  };

  const onPageChange = (currentPage) => {
    setCurrent(currentPage);
  };

  const handleClick = (text) => {
    Message.success(`暂不支持${text}`);
  };

  const buttons = [
    '编辑',
    '补正',
    '材料退回',
    '申请人主动撤回',
    '立案前化解',
    '发送办理',
    '删除',
  ];
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {buttons.map((text, index) => {
          return (
            <Button
              key={index}
              className={styles.button}
              onClick={() => handleClick(text)}
            >
              {text}
            </Button>
          );
        })}
      </div>
      <Table
        dataSource={mockData}
        rowSelection={rowSelection}
        primaryKey="number"
        className={styles.table}
      >
        <Table.Column align="center" title="案号" dataIndex="number" />
        <Table.Column align="center" title="案由" dataIndex="reason" />
        <Table.Column align="center" title="立案日期" dataIndex="date" />
        <Table.Column align="center" title="立案人" dataIndex="holder" />
        <Table.Column
          align="center"
          title="承办部门"
          dataIndex="department"
        />
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
