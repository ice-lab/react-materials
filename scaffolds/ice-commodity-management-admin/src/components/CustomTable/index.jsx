/* eslint no-prototype-builtins:0, react/forbid-prop-types:0 */
import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@alifd/next';
import SearchFilter from './SearchFilter';
import styles from './index.module.scss';

export default function CustomTable(props) {
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(cloneDeep(props.searchQueryHistory || {}));
  const [pageIndex, setPageIndex] = useState(1);
  const [dataSource, setDataSource] = useState([]);

  function fetchDataSource() {
    setLoading(true);
    // 根据当前的 searchQuery/pageIndex 获取列表数据，使用 setTimeout 模拟异步请求
    setTimeout(() => {
      setLoading(false);
      setDataSource(props.dataSource);
    }, 1 * 1000);
  }

  function onSearchSubmit() {
    setPageIndex(1);
    // clear search query
    setSearchQuery(cloneDeep(props.searchQueryHistory));
    fetchDataSource();
  }

  function onPaginationChange(index) {
    setPageIndex(index);
    fetchDataSource();
  }

  useEffect(() => {
    setPageIndex(1);
    setSearchQuery(cloneDeep(props.searchQueryHistory));
    fetchDataSource();
  }, [props]);

  const { enableFilter, columns, formConfig, hasAdvance, searchQueryHistory } = props;

  return (
    <div>
      {enableFilter && (
        <SearchFilter
          formConfig={formConfig}
          value={searchQuery}
          onChange={(newQuery) => { setSearchQuery(newQuery); }}
          onSubmit={onSearchSubmit}
          onReset={() => cloneDeep(searchQueryHistory)}
          hasAdvance={hasAdvance}
        />
      )}
      <Table dataSource={dataSource} hasBorder={false} loading={isLoading}>
        {columns.map((item) => {
          return (
            <Table.Column
              title={item.title}
              dataIndex={item.dataIndex}
              key={item.key}
              sortable={item.sortable || false}
              cell={item.cell}
              width={item.width || 'auto'}
              lock={item.lock}
            />
          );
        })}
      </Table>
      <Pagination
        className={styles.pagination}
        current={pageIndex}
        onChange={onPaginationChange}
      />
    </div>
  );
}

CustomTable.propTypes = {
  enableFilter: PropTypes.bool,
  searchQueryHistory: PropTypes.object,
  dataSource: PropTypes.array,
};

CustomTable.defaultProps = {
  enableFilter: true,
  searchQueryHistory: null,
  dataSource: [],
};
