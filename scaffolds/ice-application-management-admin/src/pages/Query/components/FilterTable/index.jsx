import React, { useState } from 'react';
import { Table, Pagination, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';

import FilterForm from './Filter';
import styles from './index.module.scss';

const data = [
  {
    id: 1,
    title: 'ice-contract-management-admin',
    url: 'https://github.com/alibaba/ice',
    type: '核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: false,
    },
  },
  {
    id: 2,
    title: 'ice-reviews-management',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
  {
    id: 3,
    title: 'ice-design-ecommerce',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: false,
    },
  },
  {
    id: 4,
    title: 'ice-usertrack-admin',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已发布',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
  {
    id: 5,
    title: 'ice-scaffold-cms',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
  {
    id: 6,
    title: 'ice-contract-management-admin',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
  {
    id: 7,
    title: 'ice-yunqi-homepage',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
  {
    id: 8,
    title: 'coreui-admin',
    url: 'https://github.com/alibaba/ice',
    type: '非核心应用',
    publishTime: '17-04-28 20:29:20',
    publishStatus: '已上线',
    owner: '淘小宝',
    operation: {
      edit: true,
    },
  },
];

export default function EnhanceTable() {
  const pageSize = 10;
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(100);
  const [filterFormValue, setFilterFormValue] = useState();
  const [loading, setLoading] = useState(false);

  function renderTitle(value, index, record) {
    return (
      <div className={styles.titleWrapper}>
        <a href="#/detail">
          <span className={styles.title}>{record.title}</span>
        </a>
      </div>
    );
  }
  function renderOperations(value, index, record) {
    if (!record.operation.edit) {
      return (
        <div className="filter-table-operation">
          <a href="#/account" className={styles.operationItem}>
            申请权限
          </a>
        </div>
      );
    }

    return (
      <div className="filter-table-operation">
        <a
          href="#"
          className={styles.operationItem}
          target="_blank"
          onClick={e => publish(record, e)}
        >
          发布
        </a>
        <a
          href="#"
          className={styles.operationItem}
          target="_blank"
          onClick={e => offline(record, e)}
        >
          下线
        </a>
      </div>
    );
  }
  function renderStatus(value) {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  }
  function fetchData(query = {}) {
    setLoading(true);

    setTimeout(() => {
      // 此处是为了模拟数据变化
      setList(query.app || query.status ? data : data.slice(0, 3));
      setCurrentPage(currentPage);
      setTotal(100);
      setLoading(false);
    }, 300);
  }
  function publish(record, e) {
    e.preventDefault();
    Message.success(`${record.title} 发布成功`);
  }
  function offline(record, e) {
    e.preventDefault();
    Message.error(`${record.title} 下线失败`);
  }
  function changePage(page) {
    fetchData({
      page,
    });
  }
  function filterFormChange(value) {
    setFilterFormValue(value);
  }
  function filterTable() {
    fetchData(filterFormValue);
  }
  function resetFilter() {
    setFilterFormValue({});
  }

  return (
    <div className="filter-table">
      <IceContainer title="应用查询">
        <FilterForm
          value={filterFormValue}
          onChange={filterFormChange}
          onSubmit={filterTable}
          onReset={resetFilter}
        />
      </IceContainer>
      <IceContainer>
        <Table
          dataSource={list}
          loading={loading}
          className="basic-table"
          hasBorder={false}
        >
          <Table.Column title="ID" dataIndex="id" width={30} />
          <Table.Column title="应用名" cell={renderTitle} width={150} />
          <Table.Column title="等级" dataIndex="type" width={100} />
          <Table.Column title="Owner" dataIndex="owner" width={100} />
          <Table.Column
            title="状态"
            dataIndex="publishStatus"
            width={85}
            cell={renderStatus}
          />
          <Table.Column
            title="操作"
            dataIndex="operation"
            width={150}
            cell={renderOperations}
          />
        </Table>
        <div className={styles.paginationWrapper}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={total}
            onChange={changePage}
          />
        </div>
      </IceContainer>
    </div>
  );
}
