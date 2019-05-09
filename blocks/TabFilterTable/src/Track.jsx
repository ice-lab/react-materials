import React, { Component } from 'react';
import { Input, Table, Pagination } from '@alifd/next';
import './index.modules.scss'

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      pageName: `Page${index}`,
      eventName: '点击事件',
      eventId: `1000${index}`,
      schemeName: '手淘商品详情',
      successNum: `1023${index}`,
      failedNum: 0,
      leader: '淘小宝',
    };
  });
};

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

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

  onChange = (value) => {
    console.log({ value });
  };

  renderOper = () => {
    return (
      <div>
        <a className="styleslink">详情</a>
        <span className="stylesseparator" />
        <a className="styleslink">申请权限</a>
      </div>
    );
  };

  render() {
    const dataSource = getData();
    const { current } = this.state;

    return (
      <div className="stylescontainer">
        <div className="stylestableHead">
          <div className="styleslabel">页面名称:</div>
          <Input
            placeholder="请输入页面名称"
            hasClear
            onChange={this.onChange}
            size="large"
            className="input"
          />
        </div>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column title="页面名称" dataIndex="pageName" width={100} />
          <Table.Column title="事件名称" dataIndex="eventName" width={150} />
          <Table.Column title="事件ID" dataIndex="eventId" width={100} />
          <Table.Column title="方案名称" dataIndex="schemeName" width={100} />
          <Table.Column title="成功数" dataIndex="successNum" width={100} />
          <Table.Column title="失败数" dataIndex="failedNum" width={100} />
          <Table.Column title="负责人" dataIndex="leader" width={100} />
          <Table.Column title="操作" cell={this.renderOper} width={200} />
        </Table>
        <Pagination
          className="stylespagination1"
          current={current}
          onChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}
