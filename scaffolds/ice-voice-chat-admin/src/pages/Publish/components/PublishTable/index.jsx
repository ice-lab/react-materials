import React from 'react';
import { Table } from '@alifd/next';
import styles from './index.module.scss';

export default function PublishTable({ data }) {
  const renderTime = (value) => {
    return (
      <div>
        <span>{value}</span>
        <span className={styles.tag}>运行中</span>
      </div>
    );
  };
  return (
    <Table hasBorder={false} dataSource={data}>
      <Table.Column title="发布时间" dataIndex="time" cell={renderTime} />
      <Table.Column title="版本说明" dataIndex="desc" />
    </Table>
  );
}
