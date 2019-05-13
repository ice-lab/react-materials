import React, { Component } from 'react';
import { Table, Pagination, Message } from '@alifd/next';
import { Link } from 'react-router-dom';
import TableFilter from './TableFilter';
import styles from './index.module.scss';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: `2018090${index}`,
      key: `200920${index}`,
      name: `iotApp0${index}`,
      platform: 'ANDROID',
      status: '正常',
    };
  });
};

export default class CustomTable extends Component {
  state = {
    current: 1,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => {
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData(10);
      }
    );
  };

  handleApply = () => {
    Message.success('申请权限已发送，请十分钟之后再试');
  };

  handleFilterChange = () => {
    this.fetchData(5);
  };

  renderOper = () => {
    return (
      <div>
        <Link to="/" className={styles.link}>
          详情
        </Link>
        <span className={styles.separator} />
        <a className={styles.link} onClick={this.handleApply}>
          申请权限
        </a>
      </div>
    );
  };

  render() {
    const { isLoading, data, current } = this.state;

    return (
      <div>
        <TableFilter onChange={this.handleFilterChange} />
        <Table loading={isLoading} dataSource={data} hasBorder={false}>
          <Table.Column title="APPID" dataIndex="id" />
          <Table.Column title="当前APPKey" dataIndex="key" />
          <Table.Column title="应用名称" dataIndex="name" />
          <Table.Column title="应用平台" dataIndex="platform" />
          <Table.Column title="应用状态" dataIndex="status" />
          <Table.Column title="操作" cell={this.renderOper} />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}
