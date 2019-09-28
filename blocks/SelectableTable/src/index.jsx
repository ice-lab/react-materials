import React, { useState } from 'react';
import { Table, Button, Icon, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const getMockData = () => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push({
      id: 100306660940 + i,
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      type: 'demo示例',
      template: '参数字典列表',
      status: '已发布',
      publisher: '小马',
      rate: '5',
      time: 2000 + i,
    });
  }
  return result;
};

// 注意：下载数据的功能，强烈推荐通过接口实现数据输出，并下载
// 因为这样可以有下载鉴权和日志记录，包括当前能不能下载，以及谁下载了什么

export default function SelectableTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource] = useState(getMockData());
  const [isLoading] = useState(false);

  // 表格可以勾选配置项
  const rowSelection = {
    // 表格发生勾选状态变化时触发
    onChange: (ids) => {
      console.log('ids', ids);
      setSelectedRowKeys(ids);
    },
    // 全选表格时触发的回调
    onSelectAll: (selected, records) => {
      console.log('onSelectAll', selected, records);
    },
    // 支持针对特殊行进行定制
    getProps: (record) => {
      return {
        disabled: record.id === 100306660941,
      };
    },
  };

  const clearSelectedKeys = () => {
    setSelectedRowKeys([]);
  };

  const deleteSelectedKeys = () => {
    console.log('delete keys', selectedRowKeys);
  };

  const deleteItem = (record) => {
    const { id } = record;
    console.log('delete item', id);
  };

  const renderOperator = (value, index, record) => {
    return (
      <div>
        <a>编辑</a>
        <a
          className={styles.removeBtn}
          onClick={deleteItem.bind(this, record)}
        >
          删除
        </a>
      </div>
    );
  };

  return (
    <div className={`${styles.selectableTable} selectable-table`} >
      <IceContainer className={styles.IceContainer}>
        <div>
          <Button size="small" className={styles.batchBtn}>
            <Icon type="add" />增加
          </Button>
          <Button
            onClick={deleteSelectedKeys}
            size="small"
            className={styles.batchBtn}
            disabled={!selectedRowKeys.length}
          >
            <Icon type="ashbin" />删除
          </Button>
          <Button
            onClick={clearSelectedKeys}
            size="small"
            className={styles.batchBtn}
          >
            <Icon type="close" />清空选中
          </Button>
        </div>
        <div>
          <a href="/" download>
            <Icon size="small" type="download" /> 导出表格数据到 .csv 文件
          </a>
        </div>
      </IceContainer>
      <IceContainer>
        <Table
          dataSource={dataSource}
          loading={isLoading}
          rowSelection={{
            ...rowSelection,
            selectedRowKeys,
          }}
        >
          <Table.Column title="编码" dataIndex="id" width={120} />
          <Table.Column title="名称" dataIndex="title.name" width={350} />
          <Table.Column title="类型" dataIndex="type" width={160} />
          <Table.Column title="模板" dataIndex="template" width={160} />
          <Table.Column title="发布状态" dataIndex="status" width={120} />
          <Table.Column title="评分" dataIndex="rate" width={120} />
          <Table.Column title="操作者" dataIndex="publisher" width={120} />
          <Table.Column title="修改时间" dataIndex="time" width={120} />
          <Table.Column
            title="操作"
            cell={renderOperator}
            lock="right"
            width={120}
          />
        </Table>
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
