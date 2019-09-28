import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Radio, Search } from '@alifd/next';
import data from './data';
import styles from  './index.module.scss'

const { Group: RadioGroup } = Radio;

export default function TimeFilterTable() {
  const [timeRange] = useState('day');
  const [isMobile] = useState(false);

  const renderOrder = (value, index) => {
    return <span>{index + 1}</span>;
  };

  return (
    <div >
      <IceContainer className={styles.filterCard}>
        <div>
          <span>选择活动日期范围：</span>
          <RadioGroup
            value={timeRange}
            dataSource={[
              {
                label: '今天',
                value: 'day',
              },
              {
                label: '本周',
                value: 'week',
              },
              {
                label: '本月',
                value: 'month',
              },
            ]}
          />
        </div>
        {!isMobile && (
          <div>
            <Search  placeholder="搜索" searchText="" />
          </div>
        )}
      </IceContainer>
      <IceContainer className={styles.tableCard}>
        <Table dataSource={data} hasBorder={false}>
          <Table.Column title="顺序" cell={renderOrder} width={45} />
          <Table.Column title="活动名称" dataIndex="title" width={85} />
          <Table.Column title="备注" dataIndex="memo" width={150} />
          <Table.Column title="有效时间" dataIndex="validity" width={85} />
          <Table.Column title="负责人" dataIndex="owner" width={85} />
        </Table>
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
