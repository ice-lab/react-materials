import React, { useState, useEffect, useCallback } from 'react';
import { Table, Pagination, Button, Dialog } from '@alifd/next';
import IceContainer from '@icedesign/container';
import FilterTag from '../FilterTag';
import FilterForm from '../FilterForm';
import styles from './index.module.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'][random(0, 1)],
      level: ['普通会员', '白银会员', '黄金会员', 'VIP 会员'][random(0, 3)],
      balance: random(10000, 100000),
      accumulative: random(50000, 100000),
      regdate: `2018-12-1${random(1, 9)}`,
      birthday: `1992-10-1${random(1, 9)}`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
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

  const fetchData = useCallback((len) => {
    setLoading(true);
    mockApi(len).then((data) => {
      setLoading(false);
      setDataSource(data);
    });
  });

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
        <FilterTag onChange={handleFilterChange} />
        <FilterForm onChange={handleFilterChange} />
      </IceContainer>
      <IceContainer>
        <Table loading={isLoading} dataSource={dataSource} hasBorder={false}>
          <Table.Column title="会员名称" dataIndex="name" />
          <Table.Column title="会员等级" dataIndex="level" />
          <Table.Column title="会员余额(元)" dataIndex="balance" />
          <Table.Column title="累计消费(元)" dataIndex="accumulative" />
          <Table.Column title="注册时间" dataIndex="regdate" />
          <Table.Column title="生日时间" dataIndex="birthday" />
          <Table.Column title="归属门店" dataIndex="store" />
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
