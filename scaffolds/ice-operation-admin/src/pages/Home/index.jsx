import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Button,
  Table,
  Dialog,
  Pagination,
  Icon,
  Breadcrumb,
} from '@alifd/next';

import styles from './index.module.scss';

const { Column } = Table;
const PAGESIZE = 10;

// MOCK 数据，实际业务按需进行替换
const mockData = () => {
  return Array.from({ length: 20 }).map((item, index) => {
    return {
      deviceId: `1000${index}`,
      typeId: `3${index}949245${index}`,
      modelId: `TAOBAO122${index}`,
      modelName: '测试设备',
      onlineStatus: '在线',
      connectStatus: '已连接',
      boundStatus: '未绑定',
    };
  });
};
const fetchData = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        content: {
          total: 88,
          dataSource: mockData(),
        },
      });
    }, 1000);
  })
);

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState('');

  function getData(page = 1, isInit = false) {
    if (!isInit) {
      setLoading(true);
    }

    fetchData().then((data) => {
      if (data.code === 200) {
        const { content } = data;
        setDataSource(content.dataSource);
        setLoading(false);
        setTotal(content.total);
        setCurrentPage(page);
      }
    });
  }

  useEffect(() => {
    getData(1, true);
  }, []);

  const onClickDelete = () => {
    Dialog.confirm({
      title: '操作',
      style: { width: '250px' },
      content: '是否要删除该数据',
      onOk: () => {
        // 发送删除请求-loading-删除成功
      },
    });
  };

  const onPaginationChange = (page) => {
    getData(page);
  };

  const onSearch = () => {
    getData(1);
  };

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const renderStatus = () => {
    const splitSpan = <span className={styles.split}>|</span>;
    const view = (
      <Link to="view" className={styles.action}>
        查看
      </Link>
    );
    const deleteItem = (
      <a
        href="javascrpt:void(0)"
        className={styles.action}
        onClick={onClickDelete}
      >
        删除
      </a>
    );
    const edit = (
      <Link to="edit" className={styles.action}>
        编辑
      </Link>
    );
    return (
      <div>
        {view}
        {splitSpan}
        {edit}
        {splitSpan}
        {deleteItem}
      </div>
    );
  };

  const renderOnlineStatus = (value) => {
    return (
      <span style={{ color: '#ee6f6d', fontWeight: 'bold' }}>
        <i className={styles.dot} />
        {value}
      </span>
    );
  };

  const renderBoundStatus = (value) => {
    return <span style={{ color: '#999' }}>{value}</span>;
  };

  const renderConnectStatus = (value) => {
    return <span style={{ color: '#57ca9a' }}>{value}</span>;
  };

  return (
    <div className={styles.container}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>型号管理</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.content}>
        <div className={styles.head}>
          <Search
            type="primary"
            placeholder="输入型号／类型／ID"
            value={inputValue}
            onChange={onInputChange}
            onSearch={onSearch}
            searchText="搜索"
          />
          <Link to="/edit">
            <Button type="primary">
              <Icon type="add" size="xs" style={{ marginRight: '4px' }} />
              新增
            </Button>
          </Link>
        </div>
        <Table
          hasBorder={false}
          isZebra={false}
          dataSource={dataSource}
          loading={isLoading}
          className="rhino-table"
        >
          <Column title="DeviceID" dataIndex="deviceId" />
          <Column title="型号ID" dataIndex="typeId" />
          <Column title="设备型号-ID" dataIndex="modelId" />
          <Column title="设备型号-名称" dataIndex="modelName" />
          <Column
            title="在线状态"
            dataIndex="onlineStatus"
            cell={renderOnlineStatus}
          />
          <Column
            title="连接状态"
            dataIndex="connectStatus"
            cell={renderConnectStatus}
          />
          <Column
            title="绑定状态"
            dataIndex="boundStatus"
            cell={renderBoundStatus}
          />
          <Column title="操作" cell={renderStatus} width={200} />
        </Table>
        <Pagination
          className={styles.pagination}
          current={currentPage}
          onChange={onPaginationChange}
          total={total}
          pageSize={PAGESIZE}
        />
      </div>
    </div>
  );
}

export default Home;
