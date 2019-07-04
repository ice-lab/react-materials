/* eslint no-prototype-builtins:0, react/forbid-prop-types:0 */
import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@alifd/next';
import SearchFilter from './SearchFilter';
import styles from './index.module.scss';

export default function CustomTable({ searchQueryHistory, ...props }) {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(cloneDeep(searchQueryHistory));
  const [pageIndex, setPageIndex] = useState(1);
  const [dataSource, setDataSource] = useState([]);
  const [prevSearchQueryHistory, setPrevSearchQueryHistory] = useState(null);

  const { enableFilter, columns, formConfig, hasAdvance } = props;

  if (prevSearchQueryHistory) {
    setSearchQuery(Object.assign(
      cloneDeep(prevSearchQueryHistory),
      searchQueryHistory
    ));
    setPageIndex(1);
    setPrevSearchQueryHistory(props.searchQueryHistory);
  }

  // works with function onPaginationChange
  useEffect(() => {
    fetchDataSource();
  }, [pageIndex]);

  function fetchDataSource() {
    setLoading(true);

    // 根据当前的 searchQuery/pageIndex 获取列表数据，使用 setTimeout 模拟异步请求
    setTimeout(() => {
      setLoading(false);
      setDataSource(props.dataSource);
    }, 1 * 1000);
  }

  function onSeacrhChange(search) {
    setSearchQuery(search);
  }

  async function onSearchSubmit(search) {
    await setSearchQuery(search);
    await setPageIndex(1);
    fetchDataSource();
  }

  function onSearchReset() {
    setSearchQuery(cloneDeep(searchQueryHistory));
  }

  function onPaginationChange(index) {
    setPageIndex(index);
  }

  return (
    <div>
      {enableFilter && (
        <SearchFilter
          formConfig={formConfig}
          value={searchQuery}
          onChange={onSeacrhChange}
          onSubmit={onSearchSubmit}
          onReset={onSearchReset}
          hasAdvance={hasAdvance}
        />
      )}
      <Table dataSource={dataSource} hasBorder={false} loading={loading}>
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

CustomTable.displayName = 'CustomTable';

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
