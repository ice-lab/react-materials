import React, { useState, useEffect, useCallback } from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@alifd/next';
import SearchFilter from './SearchFilter';
import styles from './index.module.scss';

export default function CustomTable(props) {
  const { enableFilter, columns, formConfig, hasAdvance } = props;
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(cloneDeep(props.searchQueryHistory));
  const [pageIndex, setPageIndex] = useState(1);
  const [dataSource, setData] = useState([]);

  useEffect(() => {
    fetchDataSource();
  }, [fetchDataSource]);

  const fetchDataSource = useCallback(async () => {
    await setLoading(true);

    // 根据当前的 searchQuery/pageIndex 获取列表数据，使用 setTimeout 模拟异步请求
    setTimeout(() => {
      setLoading(false);
      setData(props.dataSource);
    }, 1 * 1000);
  });

  const onSearchSubmit = async (query) => {
    await setSearchQuery(query);
    await setPageIndex(1);
    fetchDataSource();
  };

  const onSearchReset = () => {
    setSearchQuery(cloneDeep(props.searchQueryHistory));
  };

  const onPaginationChange = async (currentPageIndex) => {
    await setPageIndex(currentPageIndex);
    fetchDataSource();
  };

  return (
    <div>
      {enableFilter && (
        <SearchFilter
          formConfig={formConfig}
          value={searchQuery}
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
