import React, { Component } from 'react';
import { Table, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableFilter from './TableFilter';
import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      pageName: `Page${index}`,
      eventName: '点击事件',
      eventId: `1000${index}`,
      num: `986262${index}`,
      date: '2018-08-28',
      type: '遗漏埋点',
    };
  });
};

export default class SearchTable extends Component {
  static displayName = 'SearchTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  renderOper = () => {
    return (
      <div>
        <a className={styles.link}>详情</a>
        <span className={styles.separator} />
        <a className={styles.link}>申请权限</a>
      </div>
    );
  };

  render() {
    const dataSource = getData();
    const { current } = this.state;

    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.title}>新增或遗漏埋点</h4>
        <TableFilter />
        <Table
          dataSource={dataSource}
          hasBorder={false}
          className={styles.newAdd}
        >
          <Table.Column title="页面名称" dataIndex="pageName" />
          <Table.Column title="事件名称" dataIndex="eventName" />
          <Table.Column title="事件 ID" dataIndex="eventId" />
          <Table.Column title="日期" dataIndex="date" />
          <Table.Column title="个数" dataIndex="num" />
          <Table.Column title="类型" dataIndex="type" />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}


