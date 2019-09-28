import React, { useState } from 'react';
import { Table, Progress, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const getTableData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      name: 'A旗舰店',
      total: Math.ceil(Math.random() * 1000000),
      count: 300 - index * 10,
      progress: Math.ceil(Math.random() * 100),
    };
  });
};

export default function ProgressTable() {
  const [dataSource] = useState(getTableData());
  const [current, setCurrent] = useState(1);

  function renderCellProgress(value) {
    return <Progress percent={parseInt(value, 10)} />;
  }

  function onPageChange(pageNo) {
    setCurrent(pageNo);
  }

  return (
    <div className="progress-table">
      <IceContainer className="tab-card" title="本月最活跃金主">
        <Table
          getRowProps={(record, index) => {
            return { className: `progress-table-tr progress-table-tr${index}` };
          }}
          dataSource={dataSource}
        >
          <Table.Column title="店铺名称" dataIndex="name" width={200} />
          <Table.Column title="成交金额" dataIndex="total" width={200} />
          <Table.Column title="成交单数" dataIndex="count" width={100} />
          <Table.Column
            title=""
            dataIndex="progress"
            cell={renderCellProgress}
            width={200}
          />
        </Table>
        <div className={styles.paginationWrapper}>
          <Pagination
            current={current}
            onChange={onPageChange}
            shape="arrow-only"
          />
        </div>
      </IceContainer>
    </div>
  );
}
