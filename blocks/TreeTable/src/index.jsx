import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import styles from  './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const mockData = [
  {
    tradeCode: 1,
    department: '技术部',
    name: '张三',
    age: 32,
    address: '杭州市西湖区',
    children: [
      {
        tradeCode: 11,
        department: '前端组',
        name: '张三',
        age: 33,
        address: '杭州市西湖区',
      },
      {
        tradeCode: 12,
        department: '终端组',
        name: '张三',
        age: 33,
        address: '杭州市西湖区',
        children: [
          {
            tradeCode: 121,
            department: 'iOS 开发',
            name: '张三',
            age: 33,
            address: '杭州市西湖区',
          },
          {
            tradeCode: 122,
            department: 'Android 开发',
            name: '张三',
            age: 33,
            address: '杭州市西湖区',
          },
        ],
      },
      {
        tradeCode: 13,
        department: '后端组',
        name: '张三',
        age: 33,
        address: '杭州市西湖区',
        children: [
          {
            tradeCode: 131,
            department: '服务端',
            name: '张三',
            age: 33,
            address: '杭州市西湖区',
            children: [
              {
                tradeCode: 1311,
                department: 'Java 开发',
                name: '张三',
                age: 33,
                address: '杭州市西湖区',
              },
              {
                tradeCode: 1312,
                department: 'PHP 开发',
                name: '张三',
                age: 33,
                address: '杭州市西湖区',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    tradeCode: 2,
    department: '设计部',
    name: '张三',
    age: 32,
    address: '杭州市西湖区',
    children: [],
  },
  {
    tradeCode: 3,
    department: '产品部',
    name: '张三',
    age: 32,
    address: '杭州市西湖区',
    children: [],
  },
  {
    tradeCode: 4,
    department: '运营部',
    name: '张三',
    age: 32,
    address: '杭州市西湖区',
    children: [],
  },
];

export default function TreeTable() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize] = useState(10);
  const [total] = useState(100);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    await sleep(500);
    let data;
    if (dataSource.length > 0) {
      data = dataSource.reverse();
    } else {
      data = mockData;
    }
    setLoading(false);
    setDataSource(data);
  }

  useEffect(() => {
    fetchData(current);
  }, [current]);

  const handleChange = (crt) => {
    setCurrent(crt);
  };

  return (
    <div>
      <h4 className={styles.title}>Tree 类型的表格</h4>
      <Table
        dataSource={dataSource}
        loading={loading}
        primaryKey="tradeCode"
        isTree
      >
        <Table.Column title="部门" dataIndex="department" />
        <Table.Column title="规则编号" dataIndex="tradeCode" />
        <Table.Column title="名称" dataIndex="name" />
        <Table.Column title="年龄" dataIndex="age" />
        <Table.Column title="地址" dataIndex="address" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handleChange}
      />
    </div>
  );
}
