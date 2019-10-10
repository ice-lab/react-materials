import React, { useState } from 'react';
import { Input, Table, Pagination } from '@alifd/next';
import styles from  './index.module.scss';

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      pageName: `Page${index}`,
      eventName: '点击事件',
      eventId: `1000${index}`,
      schemeName: '手淘商品详情',
      successNum: `1023${index}`,
      failedNum: 0,
      leader: '淘小宝',
    };
  });
};

export default function TableFilter() {
  const [current, setCurrent] = useState(1);

  const handlePaginationChange = (current) => {
    setCurrent(current);
  };

  const onChange = (value) => {
    console.log({ value });
  };

  const renderOper = () => {
    return (
      <div>
        <a className={styles.link}>详情</a>
        <span className={styles.separator} />
        <a className={styles.link}>申请权限</a>
      </div>
    );
  };

  const dataSource = getData();

  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <div className={styles.label}>页面名称:</div>
        <Input
          placeholder="请输入页面名称"
          hasClear
          onChange={onChange}
          size="large"
        />
      </div>
      <Table dataSource={dataSource} hasBorder={false}>
        <Table.Column title="页面名称" dataIndex="pageName" width={100} />
        <Table.Column title="事件名称" dataIndex="eventName" width={150} />
        <Table.Column title="事件ID" dataIndex="eventId" width={100} />
        <Table.Column title="方案名称" dataIndex="schemeName" width={100} />
        <Table.Column title="成功数" dataIndex="successNum" width={100} />
        <Table.Column title="失败数" dataIndex="failedNum" width={100} />
        <Table.Column title="负责人" dataIndex="leader" width={100} />
        <Table.Column title="操作" cell={renderOper} width={200} />
      </Table>
      <Pagination
        className={styles.pagination1}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
