import React, { useState } from 'react';
import { Table, Pagination } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function CustomTable(props) {
  const { dataSource, columns, style = {}, isLoading = false } = props;
  const [current, setCurrent] = useState(1);

  async function handlePagination(currentPage) {
    await setCurrent(currentPage);
    props.fetchData();
  }

  return (
    <div style={style}>
      <Table
        loading={isLoading}
        dataSource={dataSource}
        hasBorder={false}
        className={styles.customTable}
        style={{ minHeight: '500px' }}
      >
        {columns.map((item) => {
          return (
            <Table.Column
              title={item.title}
              dataIndex={item.dataIndex}
              key={item.key}
              sortable={item.sortable || false}
              cell={item.cell || ((value) => value)}
              width={item.width || 'auto'}
            />
          );
        })}
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePagination}
      />
    </div>
  );
}

CustomTable.defaultProps = {
  columns: [],
  dataSource: [],
};

CustomTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};
