/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from '_react@16.8.6@react';
import {
  Table,
  Switch,
  Icon,
  Button,
  Grid,
  Pagination,
  Dialog,
} from '@alifd/next';
import { withRouter } from '_react-router-dom@4.3.1@react-router-dom';
import IceContainer from '@icedesign/container';
import UserSearch from '../UserSearch';
import styles from './index.module.scss';

const getData = (len = 10) => {
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push({
      id: i + 1,
      name: `王尼玛${i + 1}`,
      university: '浙江大学',
      college: '计算机',
      class: i + 1,
      phone: `187xxxx123${i}`,
      role: '学生',
    });
  }
  return result;
};

const { Row, Col } = Grid;

@withRouter
export default class UserTable extends Component {
  state = {
    current: 1,
    isLoading: false,
    data: [],
    selectedRowKeys: [],
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

  handleFilterChange = () => {
    this.fetchData(5);
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

  handleDelete = () => {
    Dialog.confirm({
      content: '确认删除吗',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  handleEdit = () => {
    Dialog.confirm({
      content: '请先申请管理员权限',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  handleBatchDelete = () => {
    Dialog.confirm({
      content: '确认批量删除已选择的吗',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  rowSelection = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys,
    });
  };

  handleClick = () => {
    this.props.history.push('/add');
  };

  renderOper = () => {
    return (
      <div className={styles.oper}>
        <Icon
          type="edit"
          size="small"
          className={styles.icon}
          onClick={this.handleEdit}
        />
        <Icon
          type="ashbin"
          size="small"
          className={styles.hb}
          onClick={this.handleDelete}
        />
      </div>
    );
  };

  render() {
    const { data, isLoading, current, selectedRowKeys } = this.state;
    return (
      <div>
        <UserSearch onChange={this.handleFilterChange} />
        <IceContainer title="学生列表">
          <Row wrap className={styles.headRow}>
            <Col l="12">
              <Button
                type="primary"
                className={styles.button}
                onClick={this.handleClick}
              >
                <Icon type="add" size="xs" style={{ marginRight: '4px' }} />
                添加学生
              </Button>
            </Col>
            <Col l="12" className={styles.center}>
              <Button
                disabled={!selectedRowKeys.length}
                type="normal"
                className={styles.button}
                onClick={this.handleBatchDelete}
              >
                批量删除
              </Button>
            </Col>
          </Row>
          <Table
            dataSource={data}
            loading={isLoading}
            rowSelection={{ onChange: this.rowSelection }}
          >
            <Table.Column title="序号" dataIndex="id" width={100} />
            <Table.Column title="姓名" dataIndex="name" width={100} />
            <Table.Column title="学校" dataIndex="university" width={200} />
            <Table.Column title="院校" dataIndex="college" width={200} />
            <Table.Column title="班级" dataIndex="class" width={100} />
            <Table.Column title="联系电话" dataIndex="phone" width={200} />
            <Table.Column title="角色" dataIndex="role" width={200} />
            <Table.Column
              title="启动/停用"
              width={100}
              cell={() => <Switch />}
            />
            <Table.Column title="操作" width={100} cell={this.renderOper} />
          </Table>
          <Pagination
            className={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
          />
        </IceContainer>
      </div>
    );
  }
}
