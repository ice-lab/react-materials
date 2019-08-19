import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function ExpandedTable() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize] = useState(10);
  const [total] = useState(100);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async (pageNo) => {
    setLoading(true);
    await sleep(500);
    const data = Array.from({ length: 10 }).map((item, index) => {
      return {
        key: (pageNo - 1) * 10 + index + 1,
        name: 'iPhone X',
        price: '8316',
        memory: '256GB',
        quantity: '2000',
        comment: '86371',
        desc:
          '所有在 Apple Store 官方旗舰店的订单的发货时间、付款期限及购买上限均以商品页面规定为准。所有在本店销售的商品，请在拍下后 15 分钟内完成支付。逾期，您的订单将被关闭。简约而不简单的设计，凸显品质，强韧张丽，抗摔设计，防水抗污，更经久耐用，以优质环保 PC 材料原材料，手感细腻顺滑，让你爱不释手。',
      };
    });
    setLoading(false);
    setDataSource(data);
  };

  useEffect(() => {
    fetchData(current);
  }, [current])

  const handlePaginationChange = (current) => {
    setCurrent(current);
  };

  return (
    <IceContainer>
      <h4 className={styles.title}>可展开表格</h4>
      <Table
        hasBorder={false}
        loading={loading}
        dataSource={dataSource}
        primaryKey="key"
        expandedRowRender={(record) => record.desc}
      >
        <Table.Column title="Key" dataIndex="key" />
        <Table.Column title="名称" dataIndex="name" />
        <Table.Column title="价格" dataIndex="price" />
        <Table.Column title="内存容量" dataIndex="memory" />
        <Table.Column title="库存数量" dataIndex="quantity" />
        <Table.Column title="累计评价" dataIndex="comment" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handlePaginationChange}
      />
    </IceContainer>
  );
}
