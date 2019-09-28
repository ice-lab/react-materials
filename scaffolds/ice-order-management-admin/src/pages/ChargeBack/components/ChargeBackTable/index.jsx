import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Overview from '@/components/Overview';
import TableFilter from './TableFilter';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getOverviewData = () => {
  return [
    {
      title: '退货单(笔)',
      value: random(10000, 50000),
    },
    {
      title: '退货数量(件)',
      value: random(5000, 10000),
    },
    {
      title: '退货金额(元)',
      value: random(10000, 100000),
    },
  ];
};

const getTableData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      backOrder: random(10000000, 100000000),
      customerName: ['淘小宝', '淘二宝'][random(0, 1)],
      orderTime: `2018-12-1${random(1, 9)}`,
      commodityCode: random(10000000, 100000000),
      commodityName: ['蓝牙音箱', '天猫精灵', '智能机器人'][random(0, 2)],
      price: ['￥99', '￥199', '￥299'][random(0, 2)],
    };
  });
};

export default function ChargeBackTable() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [overviewData, setOverviewData] = useState(getOverviewData());

  useEffect(() => {
    fetchData();
  }, []);

  const mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getTableData(len));
      }, 600);
    });
  };

  const fetchData = useCallback(async (len) => {
    await setLoading(true);
    mockApi(len).then((mockData) => {
      setData(mockData);
      setLoading(false);
      setOverviewData(getOverviewData());
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
    <div>
      <TableFilter onChange={handleFilterChange} />
      <Overview data={overviewData} col="3" />
      <IceContainer>
        <Table loading={isLoading} dataSource={data} hasBorder={false}>
          <Table.Column title="退单号" dataIndex="backOrder" />
          <Table.Column title="客户名称" dataIndex="customerName" />
          <Table.Column title="下单时间" dataIndex="orderTime" />
          <Table.Column title="商品编码" dataIndex="commodityCode" />
          <Table.Column title="商品名称" dataIndex="commodityName" />
          <Table.Column title="价格" dataIndex="price" />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={handlePaginationChange}
        />
      </IceContainer>
    </div>
  );
}
