import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Pagination, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import styles from './index.module.scss';
import Filter from './components/Filter';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      name: '新版手淘',
      appid: `2018${index}`,
      version: `0.0.${index}`,
      creator: '淘小宝',
      createTime: `2018-08-28 14:29:0${index}`,
      status: '正常',
    };
  });
};

export default function Snapshot() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [current, setCurrent] = useState(1);

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

  const breadcrumb = [
    {
      link: '/#/monitor/version',
      text: '埋点监控',
    },
    {
      link: '',
      text: '方案监控',
    },
  ];

  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="方案管理" />
      <Filter onChange={handleFilterChange} />
      <IceContainer className={styles.container}>
        <h4 className={styles.title}>快照列表</h4>
        <Table
          loading={loading}
          dataSource={dataSource}
          hasBorder={false}
          className={styles.table}
        >
          <Table.Column title="名称" dataIndex="name" />
          <Table.Column title="APPId" dataIndex="appid" />
          <Table.Column title="版本" dataIndex="version" />
          <Table.Column title="创建人" dataIndex="creator" />
          <Table.Column title="创建时间" dataIndex="createTime" />
          <Table.Column title="状态" dataIndex="status" />
          <Table.Column title="操作" cell={renderOper} />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={handlePageChange}
        />
      </IceContainer>
    </div>
  );
}
