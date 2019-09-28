import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination, Dialog } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import TableHead from './TableHead';
import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      department: '淘宝',
      name: '淘小宝',
      yearBudget: `678,89${index}`,
      appendBudget: `${index + 1}23,456`,
      distributionRate: `88.8${index}%`,
      uesed: `123,45${index}`,
      usagRate: `99.0${index}%`,
    };
  });
};

function Calculate(props) {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  const fetchData = useCallback(async (len) => {
    await setLoading(true);
    mockApi(len).then(async (mockData) => {
      await setData(mockData);
      await setLoading(false);
    });
  });

  const handlePaginationChange = async (currentPage) => {
    await setCurrent(currentPage);
    fetchData();
  };

  const handleFilterChange = () => {
    fetchData(5);
  };

  const handleEdit = () => {
    Dialog.confirm({
      title: '提示',
      content: '只有管理员才能进行修改',
    });
  };

  const handleDetail = () => {
    props.history.push('/manage/department');
  };

  const renderOper = () => {
    return (
      <div>
        <a className={styles.link} onClick={handleEdit}>
          修改
        </a>
        <span className={styles.separator} />
        <a className={styles.link} onClick={handleDetail}>
          详情
        </a>
      </div>
    );
  };

  return (
    <div className={styles.containerCalculate}>
      <TableHead onChange={handleFilterChange} />
      <Table loading={isLoading} dataSource={data} hasBorder={false}>
        <Table.Column title="部门名称" dataIndex="department" />
        <Table.Column title="接口人" dataIndex="name" />
        <Table.Column width={150} title="财年预算(万元)" dataIndex="yearBudget" />
        <Table.Column width={150} title="追加预算(万元)" dataIndex="appendBudget" />
        <Table.Column title="分配率(%)" dataIndex="distributionRate" />
        <Table.Column title="已使用(KCU)" dataIndex="uesed" />
        <Table.Column title="使用率(%)" dataIndex="usagRate" />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}

export default withRouter(Calculate);
