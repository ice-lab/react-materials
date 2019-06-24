import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '@alifd/next';
import CustomTable from '../CustomTable';
import styles from './index.module.scss';

export default function ContractTable(props) {
  function handleUpdate() {
    Message.success('暂不支持修改合同');
  }

  function handleMore() {
    Message.success('暂不支持查看详情');
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
        <a className={styles.link} onClick={handleUpdate}>
          修改
        </a>
        <span className={styles.separator} />
        <a className={styles.link} onClick={handleMore}>
          查看
        </a>
      </div>
    );
  }

  function columnsConfig() {
    return [
      {
        title: '合同编号',
        dataIndex: 'id',
        key: 'id',
        width: 100,
      },
      {
        title: '合同名称',
        dataIndex: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: '我方公司',
        dataIndex: 'ourCompany',
        key: 'ourCompany',
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
        width: 100,
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
  }

  return <CustomTable {...props} columns={columnsConfig()} />;
}

ContractTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
