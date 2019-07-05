import React, { useState, useEffect } from 'react';
import { Input, Table, Pagination, Message } from '@alifd/next';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
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
        <a style={styles.link}>详情</a>
        <span style={styles.separator} />
        <a style={styles.link} onClick={handleApply}>
          申请权限
        </a>
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.tableHead}>
        <div style={styles.label}>页面名称:</div>
        <Input
          placeholder="请输入页面名称"
          hasClear
          onChange={handleFilterChange}
          style={{ width: '220px' }}
        />
      </div>
      <Table dataSource={dataSource} loading={loading} hasBorder={false}>
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
        style={styles.pagination}
        current={current}
        onChange={handlePageChange}
      />
    </div>
  );
}

const styles = {
  container: {
    margin: '10px 0',
  },
  tableHead: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    margin: '0 10px',
  },
  link: {
    margin: '0 5px',
    color: 'rgba(49, 128, 253, 0.65)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  separator: {
    margin: '0 8px',
    display: 'inline-block',
    height: '12px',
    width: '1px',
    verticalAlign: 'middle',
    background: '#e8e8e8',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};
