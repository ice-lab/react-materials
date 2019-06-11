import React, { Component } from 'react';
import { Table } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default class RankList extends Component {
  static defaultProps = {
    columns: [],
    dataSource: [],
  };

  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
  };

  render() {
    const { subTitle, dataSource, columns } = this.props;
    return (
      <div className={styles.contentTwo}>
        <h3 className={styles.subTitle}>{subTitle}</h3>
        <Table dataSource={dataSource} hasBorder={false} className={styles.table}>
          {columns.map((item) => {
            return (
              <Table.Column
                key={item.key}
                title={item.title}
                dataIndex={item.dataIndex}
              />
            );
          })}
        </Table>
        <div className={styles.footer}>
          <a className={styles.linkTwo}>查看更多</a>
        </div>
      </div>
    );
  }
}


