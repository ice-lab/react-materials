import React from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import FilterForm from './Filter';
import data from './data';
import styles from './index.module.scss';

export default function EnhanceTable() {
  const renderTitle = (value, index, record) => {
    return (
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{record.title}</span>
      </div>
    );
  };

  const editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  const renderOperations = (value, index, record) => {
    return (
      <div
        className={styles.filterTableOperation}
      >
        <a
          href="#"
          className={styles.operationItem}
          target="_blank"
          onClick={(e) => editItem(record, e)}
        >
          解决
        </a>
        <a href="#" className={styles.operationItem} target="_blank">
          详情
        </a>
        <a href="#" className={styles.operationItem} target="_blank">
          分类
        </a>
      </div>
    );
  };

  const renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  return (
    <div className="filter-table">
      <IceContainer title="内容筛选">
        <FilterForm />
      </IceContainer>
      <IceContainer>
        <Table
          dataSource={data}
          className="basic-table"
          style={styles.basicTable}
          hasBorder={false}
        >
          <Table.Column
            title="问题描述"
            cell={renderTitle}
            width={320}
          />
          <Table.Column title="问题分类" dataIndex="type" width={85} />
          <Table.Column
            title="发布时间"
            dataIndex="publishTime"
            width={150}
          />
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
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
