import React, { useState, useEffect, useCallback } from 'react';
import { Table, Pagination, Button, Dialog } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Filter from '../Filter';
import Overview from '../Overview';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getOverviewData = () => {
  return [
    {
      title: '发货单数',
      value: random(1000, 3000),
      background: '#58ca9a',
    },
    {
      title: '发货商品数',
      value: random(3000, 6000),
      background: '#f7da47',
    },
    {
      title: '总金额',
      value: `￥ ${random(5000, 10000)}`,
      background: '#ee706d',
    },
  ];
};

const getTableData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      serialNumber: `HZ${random(1000000, 2000000)}`,
      orderNumber: random(10000000, 100000000),
      name: ['蓝牙音箱', '天猫精灵', '智能机器人'][random(0, 2)],
      spec: '- -',
      dispatchTime: `2019-01-1${random(1, 9)}`,
      orderTime: `2018-12-1${random(1, 9)}`,
      quantity: random(500, 1000),
      delivery: random(100, 500),
      amount: `￥ ${random(2000, 10000)}`,
    };
  });
};

export default function ReserveTable() {
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

  const handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        fetchData(10);
      },
    });
  };

  const handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };

  const renderOper = () => {
    return (
      <div>
        <Button
          type="primary"
          className={styles.btn}
          onClick={handleDetail}
        >
          详情
        </Button>
        <Button type="normal" warning onClick={handleDelete}>
          删除
        </Button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <IceContainer>
        <Filter onChange={handleFilterChange} />
      </IceContainer>
      <Overview data={overviewData} />
      <IceContainer>
        <Table loading={isLoading} dataSource={data} hasBorder={false}>
          <Table.Column title="流水号" dataIndex="serialNumber" />
          <Table.Column title="订单号" dataIndex="orderNumber" />
          <Table.Column title="商品名称" dataIndex="name" />
          <Table.Column title="商品规格" dataIndex="spec" />
          <Table.Column title="发货时间" dataIndex="dispatchTime" />
          <Table.Column title="下单时间" dataIndex="orderTime" />
          <Table.Column title="订购数量" dataIndex="quantity" />
          <Table.Column title="已发货数量" dataIndex="delivery" />
          <Table.Column title="已发货商品金额" dataIndex="amount" />
          <Table.Column
            title="操作"
            width={200}
            dataIndex="oper"
            cell={renderOper}
          />
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
