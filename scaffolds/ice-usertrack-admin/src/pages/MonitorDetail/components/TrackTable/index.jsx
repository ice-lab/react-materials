import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';

import TableFilter from './TableFilter';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      pageName: `Page${index}`,
      eventName: '点击事件',
      eventId: `1000${index}`,
      num: `986262${index}`,
      date: '2018-08-28',
      type: '遗漏埋点',
    };
  });
};

export default function TrackTable() {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IceContainer style={styles.container}>
      <h4 style={styles.title}>新增或遗漏埋点</h4>
      <TableFilter onChange={handleFilterChange} />
      <Table
        dataSource={dataSource}
        loading={loading}
        hasBorder={false}
        style={{ padding: '0 20px 20px' }}
      >
        <Table.Column title="页面名称" dataIndex="pageName" />
        <Table.Column title="事件名称" dataIndex="eventName" />
        <Table.Column title="事件 ID" dataIndex="eventId" />
        <Table.Column title="日期" dataIndex="date" />
        <Table.Column title="个数" dataIndex="num" />
        <Table.Column title="类型" dataIndex="type" />
      </Table>
      <Pagination
        style={styles.pagination}
        current={current}
        onChange={handlePageChange}
      />
    </IceContainer>
  );
}

const styles = {
  container: {
    margin: '0 20px',
    padding: '0 0 20px',
  },
  title: {
    margin: '0',
    padding: '15px 20px',
    fonSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0,0,0,.85)',
    fontWeight: '500',
    borderBottom: '1px solid #eee',
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
    textAlign: 'right',
  },
};
