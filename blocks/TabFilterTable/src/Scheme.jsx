import React, { useState } from 'react';
import { Checkbox, Table, Pagination } from '@alifd/next';
import styles from  './index.module.scss';

const { Group: CheckboxGroup } = Checkbox;

const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      schemeName: '手淘商品详情',
      time: '2018-08-28 11:49:38',
      leader: '淘小宝',
      stat: {
        success: '289',
        error: '23',
        uncover: '136',
      },
    };
  });
};

const checkboxOptions = [
  {
    value: 'success',
    label: '成功',
  },
  {
    value: 'error',
    label: '错误',
  },
  {
    value: 'uncover',
    label: '未覆盖',
  },
];

export default function TableFilter() {
  const [current, setCurrent] = useState(1);

  const handlePaginationChange = (current) => {
    setCurrent(current);
  };

  const onChange = (selectedItems) => {
    console.log('onChange callback', selectedItems);
  };

  const renderOper = () => {
    return <a className={styles.link}>详情</a>;
  };

  const renderStat = (value) => {
    console.log(value);
    return (
      <div>
        <span className={styles.one}>
          {value.success}
        </span>
        <span className={styles.two}>
          {value.error}
        </span>
        <span className={styles.three}>
          {value.uncover}
        </span>
      </div>
    );
  };

  const dataSource = getData();

  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <div className={styles.label}>状态:</div>
        <CheckboxGroup
          className={styles.check}
          defaultValue={['success', 'error']}
          dataSource={checkboxOptions}
          onChange={onChange}
        />
      </div>
      <Table dataSource={dataSource} hasBorder={false}>
        <Table.Column title="方案名称" dataIndex="schemeName" />
        <Table.Column title="创建时间" dataIndex="time" />
        <Table.Column title="负责人" dataIndex="leader" />
        <Table.Column
          title="监控统计"
          dataIndex="stat"
          cell={renderStat}
        />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
