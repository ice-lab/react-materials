import React, { Component } from 'react';
import { Table } from '@alifd/next';
import styles from './index.module.scss';

export default class PublishTable extends Component {
  renderTime = (value) => {
    return (
      <div>
        <span>{value}</span>
        <span className={styles.tag}>运行中</span>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <Table hasBorder={false} dataSource={data}>
        <Table.Column title="发布时间" dataIndex="time" cell={this.renderTime} />
        <Table.Column title="版本说明" dataIndex="desc" />
      </Table>
    );
  }
}
