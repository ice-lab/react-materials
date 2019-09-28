import React from 'react';
import { Table, Checkbox } from '@alifd/next';

import styles from './index.module.scss';

const DATA = [
  {
    id: 1,
    type: 'Project',
    read: true,
    write: false,
    delete: false,
  },
  {
    id: 2,
    type: 'Tasks',
    read: true,
    write: true,
    delete: false,
  },
  {
    id: 3,
    type: 'Chat',
    read: true,
    write: false,
    delete: false,
  },
  {
    id: 4,
    type: 'Estimates',
    read: true,
    write: false,
    delete: false,
  },
];

export default function TopActiveChart() {
  const renderCheckbox = (value) => {
    return <Checkbox checked={value} />;
  };
  return (
    <div className={styles.MemberPermission}>
      <h2 className={styles.title}>设置权限</h2>
      <Table dataSource={DATA} hasBorder={false} style={{ width: '100%' }}>
        <Table.Column title="" dataIndex="type" />
        <Table.Column
          title="READ"
          dataIndex="read"
          cell={renderCheckbox}
        />
        <Table.Column
          title="Write"
          dataIndex="write"
          cell={renderCheckbox}
        />
        <Table.Column
          title="Delete"
          dataIndex="delete"
          cell={renderCheckbox}
        />
      </Table>
    </div>
  );
}
