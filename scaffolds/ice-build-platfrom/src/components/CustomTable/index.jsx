import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function Home(props) {
  const [current, setCurrent] = useState(1);


  function handlePagination(cur) {
    setCurrent(cur);
  }

  useEffect(() => {
    props.onChange();
  }, [current, props]);

  const { isLoading, dataSource, columns } = props;

  return (
    <div>
      <Table
        dataSource={dataSource}
        hasBorder={false}
        className={styles.customTable}
        loading={isLoading}
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

Home.displayName = 'Home';
Home.defaultProps = {
  isLoading: false,
  columns: [],
  dataSource: [],
};
Home.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};
