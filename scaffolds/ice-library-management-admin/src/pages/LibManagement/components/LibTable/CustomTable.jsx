import React, { Component } from 'react';
import { Table, Pagination } from '@alifd/next';
import styles from './index.module.scss';

export default class CustomTable extends Component {
  static displayName = 'CustomTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.props.paginationChange();
      }
    );
  };

  render() {
    const { current } = this.state;
    const { dataSource, columns, isLoading } = this.props;
    return (
      <div>
        <Table
          loading={isLoading}
          dataSource={dataSource}
          hasBorder={false}
          className={styles.tableCustom}
        >
          {columns.map((item, index) => {
            return (
              <Table.Column
                key={index}
                title={item.title}
                width={item.width || 'auto'}
                dataIndex={item.dataIndex}
                cell={item.cell || (value => value)}
              />
            );
          })}
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}


