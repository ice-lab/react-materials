import React, { Component } from 'react';
import { Input, Table } from '@alifd/next';
import styles from './index.module.scss';

export default class GeneralizationTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className={styles.searchBar}>
          <div className={styles.info}>共计 {data.length} 条泛化规则</div>
          <Input

            style={{ width: '300px' }}
            placeholder="请输入泛化规则名称或者泛化词汇"
          />
        </div>
        <Table hasBorder={false} dataSource={data}>
          <Table.Column title="规则名称" dataIndex="name" />
          <Table.Column title="规则描述" dataIndex="desc" />
          <Table.Column title="泛化词汇" dataIndex="words" />
          <Table.Column title="关联技能" dataIndex="skill" />
        </Table>
      </div>
    );
  }
}

