import React, { useState } from 'react';
import { Table, Pagination } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function Home(props) {
  const [current, setCurrent] = useState(1);
  const { dataSource, columns } = props;

  function handlePagination(currentPage) {
    setCurrent(currentPage);
  }

  return (
    <div>
      <Table
        dataSource={dataSource}
        hasBorder={false}
        className={styles.customTable}
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
        onChange={handlePagination}
      />
    </div>
  );
}

Home.defaultProps = {
  columns: [],
  dataSource: [],
};

Home.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};
