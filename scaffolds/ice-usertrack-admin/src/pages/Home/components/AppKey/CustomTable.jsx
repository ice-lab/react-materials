import React, { useState, useEffect } from 'react';
import { Table, Pagination, Message } from '@alifd/next';
import { Link } from 'react-router-dom';

import TableFilter from './TableFilter';
import styles from './index.module.scss';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: `2018090${index}`,
      key: `200920${index}`,
      name: `iotApp0${index}`,
      platform: 'ANDROID',
      status: '正常',
    };
  });
};

export default function CustomTabl() {
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  function fetchData(len, callback) {
    setLoading(true);

    setTimeout(() => {
      setDataSource(getData(len));
      setLoading(false);
      callback && callback();
    }, 1 * 1000);
  }
  function handlePageChange(pageIndex) {
    fetchData(10, () => {
      setCurrent(pageIndex);
    });
  }
  function handleFilterChange() {
    setCurrent(1);
    fetchData(5);
  }
  function handleApply() {
    Message.success('申请权限已发送，请十分钟之后再试');
  }
  function renderOper() {
    return (
      <div>
        <Link to="/" className={styles.link}>
          详情
        </Link>
        <span className={styles.separator} />
        <a className={styles.link} onClick={handleApply}>
          申请权限
        </a>
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TableFilter onChange={handleFilterChange} />
      <Table loading={loading} dataSource={dataSource} hasBorder={false}>
        <Table.Column title="APPID" dataIndex="id" />
        <Table.Column title="当前APPKey" dataIndex="key" />
        <Table.Column title="应用名称" dataIndex="name" />
        <Table.Column title="应用平台" dataIndex="platform" />
        <Table.Column title="应用状态" dataIndex="status" />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePageChange}
      />
    </div>
  );
}
