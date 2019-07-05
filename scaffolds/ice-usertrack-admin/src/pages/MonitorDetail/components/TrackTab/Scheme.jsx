import React, { useState, useEffect } from 'react';
import { Checkbox, Table, Pagination } from '@alifd/next';

const { Group: CheckboxGroup } = Checkbox;

const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      schemeName: '手淘商品详情',
      time: '2018-08-28 11:49:38',
      leader: '淘小宝',
      stat: {
        success: '289',
        error: '23',
        uncover: '136',
      },
    };
  });
};

const checkboxOptions = [
  {
    value: 'success',
    label: '成功',
  },
  {
    value: 'error',
    label: '错误',
  },
  {
    value: 'uncover',
    label: '未覆盖',
  },
];

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
  function renderOper() {
    return <a style={styles.link}>详情</a>;
  }
  function renderStat(value) {
    return (
      <div>
        <span style={{ ...styles.stat, ...styles.successColor }}>
          {value.success}
        </span>
        <span style={{ ...styles.stat, ...styles.errorColor }}>
          {value.error}
        </span>
        <span style={{ ...styles.stat, ...styles.uncoverColor }}>
          {value.uncover}
        </span>
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.tableHead}>
        <div style={styles.label}>状态:</div>
        <CheckboxGroup
          style={{ marginLeft: '10px' }}
          defaultValue={['success', 'error']}
          dataSource={checkboxOptions}
          onChange={handleFilterChange}
        />
      </div>
      <Table loading={loading} dataSource={dataSource} hasBorder={false}>
        <Table.Column title="方案名称" dataIndex="schemeName" />
        <Table.Column title="创建时间" dataIndex="time" />
        <Table.Column title="负责人" dataIndex="leader" />
        <Table.Column
          title="监控统计"
          dataIndex="stat"
          cell={renderStat}
        />
        <Table.Column title="操作" cell={renderOper} />
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
    marginRight: '10px',
  },
  link: {
    margin: '0 5px',
    color: 'rgba(49, 128, 253, 0.65)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  stat: {
    padding: '4px 8px',
    color: '#fff',
    fontSize: '12px',
  },
  successColor: {
    background: '#00a854',
  },
  errorColor: {
    background: '#f04134',
  },
  uncoverColor: {
    background: '#ffbf00',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};
