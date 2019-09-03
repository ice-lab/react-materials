import React, { useState, useEffect } from 'react';
import { Table, Icon, Button } from '@alifd/next';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function SortableTable() {
  const [dataSource, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await sleep(500);
    const data = Array.from({ length: 5 }).map((item, index) => {
      console.log(123)
      return {
        todo: `待办事项 ${index}`,
        memo: `备注说明文案 ${index}`,
        validity: '2017-12-12',
      };
    });
    setLoading(false);
    setData(data);
  }; 

  useEffect(() => {
    fetchData()
  }, [])

  const moveUp = (index) => {
    if (index > 0) {
      const prevItem = dataSource[index - 1];
      const currentItem = dataSource[index];
      dataSource.splice(index - 1, 2, currentItem, prevItem);
      setData([...dataSource]);
    }
  };

  const moveDown = (index) => {
    if (index < dataSource.length - 1) {
      const currentItem = dataSource[index];
      const nextItem = dataSource[index + 1];
      dataSource.splice(index, 2, nextItem, currentItem);
      setData([...dataSource]);
    }
  };

  const renderOrder = (value, index) => {
    return <span>{index}</span>;
  };

  const renderSortButton = (value, index) => {
    return (
      <div>
        <Button
          onClick={() => moveDown(index)}
          size="large"
          text
          disabled={index === dataSource.length - 1}
        >
          <Icon title="下移" type="descending" />
        </Button>
        <Button
          onClick={() => moveUp(index)}
          size="large"
          text
          disabled={index === 0}
        >
          <Icon title="上移" type="ascending" />
        </Button>
      </div>
    );
  };

  return (
    <div>
      <h4 className={styles.title}>可排序表格</h4>
      <Table dataSource={dataSource} loading={loading} hasBorder={false}>
        <Table.Column width={80} title="顺序" cell={renderOrder} />
        <Table.Column width={280} title="待办事项" dataIndex="todo" />
        <Table.Column width={240} title="备注" dataIndex="memo" />
        <Table.Column width={180} title="有效时间" dataIndex="validity" />
        <Table.Column width={80} title="排序" cell={renderSortButton} />
      </Table>
    </div>
  );
}
