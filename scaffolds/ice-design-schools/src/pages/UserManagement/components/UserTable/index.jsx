import React, { useState, useEffect } from 'react';
import {
  Table,
  Switch,
  Icon,
  Button,
  Grid,
  Pagination,
  Dialog,
} from '@alifd/next';
import { withRouter } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import UserSearch from '../UserSearch';
import styles from './index.module.scss';

const getData = (len = 10) => {
  const result = [];
  for (let i = 0; i < len; i += 1) {
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

function UserTable(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
      setTableData(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = () => {
    fetchData(5);
  };

  const handlePaginationChange = (current) => {
    setCurrentPage(current);
    fetchData(10);
  };

  const handleDelete = () => {
    Dialog.confirm({
      content: '确认删除吗',
      onOk: () => {
        fetchData();
      },
    });
  };

  const handleEdit = () => {
    Dialog.confirm({
      content: '请先申请管理员权限',
      onOk: () => {
        fetchData();
      },
    });
  };

  const handleBatchDelete = () => {
    Dialog.confirm({
      content: '确认批量删除已选择的吗',
      onOk: () => {
        fetchData();
      },
    });
  };

  const rowSelection = (keys) => {
    setSelectedRowKeys(keys);
  };

  const handleClick = () => {
    props.history.push('/add');
  };

  const renderOper = () => {
    return (
      <div className={styles.oper}>
        <Icon
          type="edit"
          size="small"
          className={styles.icon}
          onClick={handleEdit}
        />
        <Icon
          type="ashbin"
          size="small"
          className={styles.hb}
          onClick={handleDelete}
        />
      </div>
    );
  };

  return (
    <div>
      <UserSearch onChange={handleFilterChange} />
      <IceContainer title="学生列表">
        <Row wrap className={styles.headRow}>
          <Col l="12">
            <Button
              type="primary"
              className={styles.button}
              onClick={handleClick}
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
              onClick={handleBatchDelete}
            >
              批量删除
            </Button>
          </Col>
        </Row>
        <Table
          dataSource={tableData}
          loading={isLoading}
          rowSelection={{ onChange: rowSelection }}
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
          <Table.Column title="操作" width={100} cell={renderOper} />
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

export default withRouter(UserTable);
