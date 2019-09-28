import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Message } from '@alifd/next';

import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      testTime: `2018-08-28 14:29:0${index}`,
      creator: '淘小宝',
      reportName: '手淘双十一测试',
      schemeName: '手淘内容详情页',
      result: '通过',
    };
  });
};

export default function ReportTable() {
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
  function renderOper() {
    return (
      <div>
        <a
          className={styles.link}
          onClick={() => {
            Message.success('申请权限已发送，请十分钟之后再试');
          }}
        >
          详情
        </a>
        <span className={styles.separator} />
        <a
          className={styles.link}
          onClick={() => {
            Message.prompt('需要管理员权限才能查看详情');
          }}
        >
          申请权限
        </a>
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IceContainer className={styles.container}>
      <Table loading={loading} dataSource={dataSource} hasBorder={false}>
        <Table.Column title="测试时间" dataIndex="testTime" />
        <Table.Column title="创建人" dataIndex="creator" />
        <Table.Column title="报告名称" dataIndex="reportName" />
        <Table.Column title="方案名称" dataIndex="schemeName" />
        <Table.Column title="测试结果" dataIndex="result" />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePageChange}
      />
    </IceContainer>
  );
}
