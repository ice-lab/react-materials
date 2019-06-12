import React, { Component } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceImg from '@icedesign/img';
import IceLabel from '@icedesign/label';
import data from './data';
import styles from './index.module.scss';

export default class SimpleTable extends Component {
  static displayName = 'SimpleTable';

  static propTypes = {};

  static defaultProps = {};

  renderTitle = (value, index, record) => {
    return (
      <div
        className={styles.newTtitle}

      >
        <div>
          <IceImg src={record.cover} width={48} height={48} />
        </div>
        <span
          className={styles.newTtitles}
        >
          {record.title}
        </span>
      </div>
    );
  };

  editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  renderOperations = (value, index, record) => {
    return (
      <div className={styles.reslove }>
        <a
          href="#"
          className={styles.operation}
          target="_blank"
          onClick={() => {
            this.editItem(record);
          }}
        >
          解决
        </a>
        <a href="#" className={styles.operation} target="_blank">
          详情
        </a>
        <a href="#" className={styles.operation} target="_blank">
          分类
        </a>
      </div>
    );
  };

  renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  render() {
    return (
      <div className="simple-table">
        <IceContainer>
          <Table dataSource={data} className="basic-table" hasBorder={false}>
            <Table.Column
              title="问题描述"
              cell={this.renderTitle}
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
              cell={this.renderStatus}
            />
            <Table.Column
              title="操作"
              dataIndex="operation"
              width={150}
              cell={this.renderOperations}
            />
          </Table>
          <div className={styles.paginationWrapper}>
            <Pagination />
          </div>
        </IceContainer>
      </div>
    );
  }
}


