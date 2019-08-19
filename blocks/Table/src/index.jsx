import React, { useState, useEffect } from 'react';
import { Table, Pagination, Balloon } from '@alifd/next';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function FilterTable() {
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(10);
  const [total] = useState(100);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async (pageNo) => {
    setLoading(true);
    await sleep(500);
    const data = Array.from({ length: 10 }).map((item, index) => {
      return {
        id: (pageNo - 1) * 10 + index + 1,
        orderID: `12022123${index}`,
        name: '张一峰',
        date: `2018-06-${index + 1}`,
        planDate: `2018-06-${index + 1}`,
        validData: `2018-06-${index + 1}`,
        category: '青霉素',
        state: '已审核',
        approver: `刘建明 ${pageNo}`,
        approvalData: `2018-06-${index + 1}`,
      };
    });
    setLoading(false);
    setDataSource(data);
  }

  useEffect(() => {
    fetchData(current)
  }, [current]);

  const handlePagination = (crt) => {
    setCurrent(crt);
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

  return (
    <div className={styles.tableContainer}>

      <Table
        dataSource={dataSource}
        loading={loading}
        hasBorder={false}
      >
        <Table.Column title="序列号" dataIndex="id" align="center" />
        <Table.Column title="调价单号" dataIndex="orderID" />
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
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handlePagination}
      />
    </div>
  );
}
