import React, { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import { Table, Pagination, Button, Message } from '@alifd/next';
import SearchFilter from './SearchFilter';
import styles from './index.module.scss';

const defaultSearchQuery = {
  id: '',
  archiveId: '',
  applyCode: '',
  name: '',
  otherCompany: '',
  principal: '',
  createTime: [],
  signTime: [],
  endTime: [],
  state: '',
  type: '',
  checkbox: 'false',
};

export default function ContractTable(props) {
  const { enableFilter } = props;
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(cloneDeep(defaultSearchQuery));
  const [pageIndex, setPageIndex] = useState(1);
  const [dataSource, setData] = useState([]);

  useEffect(() => {
    fetchDataSource();
  }, []);

  function fetchDataSource() {
    setLoading(true);

    // 根据当前的 searchQuery/pageIndex 获取列表数据，使用 setTimeout 模拟异步请求
    setTimeout(() => {
      const dataSource = Array.from({ length: 20 }).map((item, index) => {
        return {
          id: `00000${index}`,
          name: '聘用合同',
          ourCompany: '杭州xxx科技有限公司',
          otherCompany: '上海xxx科技有限公司',
          amount: '999,999',
          currency: 'CNY',
          state: '签约中',
        };
      });

      setLoading(false);
      setData(dataSource);
    }, 1 * 1000);
  }

  async function onSearchSubmit(searchQuery) {
    await setSearchQuery(searchQuery);
    await setPageIndex(1);
    await fetchDataSource();
  }

  async function onSearchReset() {
    await setSearchQuery(cloneDeep(defaultSearchQuery));
  }

  async function onPaginationChange(pageIndex) {
    await setPageIndex(pageIndex);
    await fetchDataSource();
  }

  function renderState(value) {
    return (
      <div className={styles.state}>
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  }

  function renderOper() {
    return (
      <div>
        <Button
          text
          onClick={() => {
            Message.success('修改合同');
          }}
        >
          修改合同
        </Button>
        <span className={styles.separator} />
        <Button
          text
          onClick={() => {
            Message.success('查看详情');
          }}
        >
          查看详情
        </Button>
      </div>
    );
  };

  function getTableColumns() {
    return [
      {
        title: '合同编号',
        dataIndex: 'id',
        key: 'id',
        lock: true,
        width: 100,
      },
      {
        title: '合同名称',
        dataIndex: 'name',
        key: 'name',
        lock: true,
        width: 100,
      },
      {
        title: '我方公司',
        dataIndex: 'ourCompany',
        key: 'ourCompany',
        width: 160,
      },
      {
        title: '对方公司',
        dataIndex: 'otherCompany',
        key: 'otherCompany',
        width: 160,
      },
      {
        title: '合同金额',
        dataIndex: 'amount',
        key: 'amount',
        width: 100,
      },
      {
        title: '币种',
        dataIndex: 'currency',
        key: 'currency',
        width: 60,
      },
      {
        title: '合同状态',
        dataIndex: 'state',
        key: 'state',
        cell: renderState,
        width: 100,
      },
      {
        title: '操作',
        dataIndex: 'detail',
        key: 'detail',
        cell: renderOper,
        width: 200,
      },
    ];
  };

  return (
    <div>
      {enableFilter && (
        <SearchFilter
          value={searchQuery}
          onSubmit={onSearchSubmit}
          onReset={onSearchReset}
        />
      )}
      <Table dataSource={dataSource} hasBorder={false} loading={loading}>
        {getTableColumns().map((item) => {
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

ContractTable.propTypes = {
  enableFilter: PropTypes.bool,
  searchQueryHistory: PropTypes.object,
};

ContractTable.defaultProps = {
  enableFilter: true,
  searchQueryHistory: null,
};
