import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from '@alifd/next';
import CustomTable from '../CustomTable';
import styles from './index.module.scss';

export default class ContractTable extends Component {
  static displayName = 'ContractTable';

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  handleUpdate = () => {
    Message.success('暂不支持修改合同');
  };

  handleMore = () => {
    Message.success('暂不支持查看详情');
  };

  renderState = (value) => {
    return (
      <div className={styles.state}>
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  };

  renderOper = () => {
    return (
      <div>
        <a className={styles.link} onClick={this.handleUpdate}>
          修改
        </a>
        <span className={styles.separator} />
        <a className={styles.link} onClick={this.handleMore}>
          查看
        </a>
      </div>
    );
  };

  columnsConfig = () => {
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
        cell: this.renderState,
        width: 100,
      },
      {
        title: '操作',
        dataIndex: 'detail',
        key: 'detail',
        cell: this.renderOper,
        width: 200,
      },
    ];
  };

  render() {
    return <CustomTable {...this.props} columns={this.columnsConfig()} />;
  }
}