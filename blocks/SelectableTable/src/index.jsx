import React, { useState, useEffect } from 'react';
import { Table, Button, Icon, Pagination } from '@alifd/next';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function SelectableTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(10);
  const [total] = useState(100);
  const [dataSource, setDataSource] = useState([]);

  const clearSelectedKeys = () => {
    setSelectedRowKeys([]);
  };

  const fetchData = async (crt) => {
    setLoading(true);
    await sleep(500);
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
        publisher: `小马${crt}`,
        rate: '5',
        time: 2000 + i,
      });
    }
    setLoading(false);
    setDataSource(result);
    clearSelectedKeys();
  };

  useEffect(() => {
    fetchData(current);
  }, [current]);

  const handlePaginationChange = (current) => {
    setCurrent(current);
  };

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

  const deleteSelectedKeys = () => {
    // ajax 处理数据
    console.log('delete keys', selectedRowKeys);
    // refetch Data
    setCurrent(1);
  };

  return (
    <div>
      <h4 className={styles.title}>可批量操作的表格</h4>
      <div className={styles.btns}>
        <Button
          onClick={deleteSelectedKeys}
          size="small"
          className={styles.deleteBtn}
          disabled={!selectedRowKeys.length}
        >
          <Icon type="ashbin" />删除
        </Button>
        <Button
          onClick={clearSelectedKeys}
          size="small"
        >
          <Icon type="close" />清空选中
        </Button>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          loading={loading}
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
        </Table>
        <div className={styles.pagination}>
          <Pagination 
            current={current}
            pageSize={pageSize}
            total={total}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </div>
  );
}
