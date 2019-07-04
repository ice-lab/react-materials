import React, { useState, useEffect } from 'react';
import { Table, Pagination, Button, Dialog } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Filter from '../Filter';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['蓝牙音箱', '天猫精灵', '智能机器人'][random(0, 2)],
      cate: ['数码', '智能'][random(0, 1)],
      tag: ['新品', '预售'][random(0, 1)],
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
      sales: random(1000, 2000),
      service: ['可预约', '可体验'][random(0, 1)],
    };
  });
};

export default function GoodsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  const fetchData = (len) => {
    setLoading(true);
    mockApi(len).then((data) => {
      setLoading(false);
      setDataSource(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePaginationChange = (current) => {
    setCurrentPage(current);
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
          style={{ marginRight: '5px' }}
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
      <IceContainer>
        <Table loading={isLoading} dataSource={dataSource} hasBorder={false}>
          <Table.Column title="商品名称" dataIndex="name" />
          <Table.Column title="商品分类" dataIndex="cate" />
          <Table.Column title="商品标签" dataIndex="tag" />
          <Table.Column title="在售门店" dataIndex="store" />
          <Table.Column title="总销量" dataIndex="sales" />
          <Table.Column title="商品服务" dataIndex="service" />
          <Table.Column
            title="操作"
            width={200}
            dataIndex="oper"
            cell={renderOper}
          />
        </Table>
        <Pagination
          className={styles.pagination}
          current={currentPage}
          onChange={handlePaginationChange}
        />
      </IceContainer>
    </div>
  );
}
