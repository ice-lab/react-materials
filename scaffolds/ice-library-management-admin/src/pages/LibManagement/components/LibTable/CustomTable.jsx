import React, { useState } from 'react';
import { Table, Pagination } from '@alifd/next';
import styles from './index.module.scss';

export default function CustomTable(props) {
  const [current, setCurrent] = useState(1);

  const handlePaginationChange = async (crt) => {
    await setCurrent(crt);
    props.paginationChange();
  };

  const { dataSource, columns, isLoading } = props;
  return (
    <div>
      <Table
        loading={isLoading}
        dataSource={dataSource}
        hasBorder={false}
        className={styles.tableCustom}
      >
        {columns.map((item, index) => {
          return (
            <Table.Column
              key={index}
              title={item.title}
              width={item.width || 'auto'}
              dataIndex={item.dataIndex}
              cell={item.cell || (value => value)}
            />
          );
        })}
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
