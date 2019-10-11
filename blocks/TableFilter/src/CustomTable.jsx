import React, { useState } from 'react';
import { Table, Pagination, Balloon, Icon } from '@alifd/next';
import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 20 }).map((item, index) => {
    return {
      id: index + 1,
      orderID: `12022123${index}`,
      name: '张一峰',
      date: `2018-06-${index + 1}`,
      planDate: `2018-06-${index + 1}`,
      validData: `2018-06-${index + 1}`,
      category: '青霉素',
      state: '已审核',
      approver: '刘建明',
      approvalData: `2018-06-${index + 1}`,
    };
  });
};

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [dataSource, setData] = useState(getData());

  const handlePagination = (current) => {
    setCurrent(current);
  };

  const handleSort = (dataIndex, order) => {
    const dataSource = dataSource.sort((a, b) => {
      const result = a[dataIndex] - b[dataIndex];
      if (order === 'asc') {
        return result > 0 ? 1 : -1;
      }
      return result > 0 ? -1 : 1;
    });

    setData(dataSource);
  };

  const renderCatrgory = (value) => {
    return (
      <Balloon
        align="lt"
        trigger={<div className={styles.ballondiv}>{value}</div>}
        closable={false}
        className={styles.ballon}
      >
        青霉素是抗菌素的一种，是能破坏细菌的细胞壁并在细菌细胞的繁殖期起杀菌作用的一类抗生素
      </Balloon>
    );
  };

  const renderState = (value) => {
    return (
      <div>
        <span className={styles.circle} />
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  };

  const renderOper = () => {
    return (
      <div>
        <Icon type="edit" size="small" className={styles.editIcon} />
      </div>
    );
  };

  return (
    <div className={styles.tableContainer}>
      <Table
        dataSource={dataSource}
        onSort={handleSort}
        hasBorder={false}
      >
        <Table.Column title="序列号" dataIndex="id" sortable align="center" />
        <Table.Column title="调价单号" dataIndex="orderID" sortable />
        <Table.Column title="调价人" dataIndex="name" />
        <Table.Column title="调价日期" dataIndex="date" />
        <Table.Column title="计划生效日期" dataIndex="planDate" />
        <Table.Column title="实际生效日期" dataIndex="validData" />
        <Table.Column
          title="分类"
          dataIndex="category"
          cell={renderCatrgory}
        />
        <Table.Column
          title="状态"
          dataIndex="state"
          cell={renderState}
        />
        <Table.Column title="审核人" dataIndex="approver" />
        <Table.Column title="审核日期" dataIndex="approvalData" />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePagination}
      />
    </div>
  );
}
