import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination, Dialog } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import TableHead from './TableHead';
import styles from './index.module.scss';
// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      department: '阿里云',
      name: '淘小宝',
      yearBudget: `12,34${index}`,
      appendBudget: '0',
      distribution: `91,12${index}`,
      distributionRate: `66.1${index}%`,
      uesed: `5,67${index}`,
      usagRate: `33.0${index}`,
    };
  });
};

function Memory(props) {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    <div className={styles.containerMemory}>
      <TableHead onChange={handleFilterChange} />
      <Table loading={isLoading} dataSource={data} hasBorder={false}>
        <Table.Column title="部门名称" dataIndex="department" width={100} />
        <Table.Column title="接口人" dataIndex="name" width={150} />
        <Table.Column
          title="财年预算(万元)"
          dataIndex="yearBudget"
          width={150}
        />
        <Table.Column
          title="追加预算(万元)"
          dataIndex="appendBudget"
          width={150}
        />
        <Table.Column title="已分配" dataIndex="distribution" width={100} />
        <Table.Column
          title="分配率(%)"
          dataIndex="distributionRate"
          width={100}
        />
        <Table.Column title="已使用(KCU)" dataIndex="uesed" width={100} />
        <Table.Column title="使用率(%)" dataIndex="usagRate" width={100} />
        <Table.Column title="操作" cell={renderOper} width={200} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}

export default withRouter(Memory);
