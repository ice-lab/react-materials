import React, { useState } from 'react';
import { Table, Pagination } from '@alifd/next';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function CustomTable({ dataSource, columns }) {
  const [current, setCurrent] = useState(1);

  function handlePaginationChange(pageIndex) {
    setCurrent(pageIndex);
  }

  return (
    <div className={styles.container}>
      <Table
        dataSource={dataSource}
        hasBorder={false}
      >
        {columns.map((item) => {
          return (
            <Table.Column
              title={item.title}
              dataIndex={item.dataIndex}
              key={item.key}
              sortable={item.sortable || false}
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

CustomTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

CustomTable.defaultProps = {
  columns: [],
  dataSource: [],
};
