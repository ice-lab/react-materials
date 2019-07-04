import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class SnapshotTable extends Component {
  state = {
    current: 1,
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.props.fetchData(10);
      }
    );
  };

  renderOper = () => {
    return (
      <Link to="/" className={styles.link}>
        查看监控详情
      </Link>
    );
  };

  render() {
    const { current } = this.state;
    const { isLoading, data } = this.props;

    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.title}>快照列表</h4>
        <Table
          loading={isLoading}
          dataSource={data}
          hasBorder={false}
          className={styles.table}
        >
          <Table.Column title="名称" dataIndex="name" />
          <Table.Column title="APPId" dataIndex="appid" />
          <Table.Column title="版本" dataIndex="version" />
          <Table.Column title="创建人" dataIndex="creator" />
          <Table.Column title="创建时间" dataIndex="createTime" />
          <Table.Column title="状态" dataIndex="status" />
          <Table.Column title="操作" cell={this.renderOper} />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}
