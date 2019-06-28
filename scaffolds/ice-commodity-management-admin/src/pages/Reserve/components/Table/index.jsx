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
      name: ['淘小宝', '淘二宝'][random(0, 1)],
      service: ['项目A', '项目B', '项目C'][random(0, 2)],
      receiver: ['淘小宝', '淘二宝'][random(0, 1)],
      arrivalTime: `2019-01-1${random(1, 9)}`,
      reserveTime: `2018-12-1${random(1, 9)}`,
      address: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
      note: '- -',
    };
  });
};

export default function ReserveTable() {
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
          <Table.Column title="姓名" dataIndex="name" />
          <Table.Column title="预约服务" dataIndex="service" />
          <Table.Column title="接待人" dataIndex="receiver" />
          <Table.Column title="到店时间" dataIndex="arrivalTime" />
          <Table.Column title="预约时间" dataIndex="reserveTime" />
          <Table.Column title="预约门店" dataIndex="address" />
          <Table.Column title="预约备注" dataIndex="note" />
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
