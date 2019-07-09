import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableFilter from './TableFilter';
import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      grade: `A${index}`,
      average: `99.${index}`,
      standard: '90',
      alltable: `100${index}`,
      isSubstandard: '0',
      tableRowRate: `80.${index}%`,
      notEmptyRate: `${index}0%`,
      uniqueRate: `70.${index}`,
      fluctuateRate: `2.${index}`,
      otherRate: '0',
    };
  });
};

export default function QualityTable() {
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

  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.titleTwo}>等级表概览</h4>
      <TableFilter onChange={handleFilterChange} />
      <Table
        loading={isLoading}
        dataSource={data}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="等级" dataIndex="grade" />
        <Table.Column title="平均分" dataIndex="average" />
        <Table.Column title="标准分" dataIndex="standard" />
        <Table.Column title="所有表个数" dataIndex="alltable" />
        <Table.Column title="不达标个数" dataIndex="isSubstandard" />
        <Table.Column title="表行数监控率" dataIndex="tableRowRate" />
        <Table.Column title="不为空监控率" dataIndex="notEmptyRate" />
        <Table.Column title="唯一性监控率" dataIndex="uniqueRate" />
        <Table.Column title="波动监控率" dataIndex="fluctuateRate" />
        <Table.Column title="其他监控率" dataIndex="otherRate" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </IceContainer>
  );
}
