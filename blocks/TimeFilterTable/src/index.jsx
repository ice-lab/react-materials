/* eslint no-underscore-dangle:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Radio, Search } from '@alifd/next';
import data from './data';
import './index.modules.scss'

const { Group: RadioGroup } = Radio;

export default class TimeFilterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRange: 'day',
      isMobile: false,
    };
  }

  renderOrder = (value, index) => {
    return <span>{index + 1}</span>;
  };

  render() {
    return (
      <div className="time-filter-table">
        <IceContainer className="stylesfilterCard">
          <div>
            <span>选择活动日期范围：</span>
            <RadioGroup
              value={this.state.timeRange}
              dataSource={[
                {
                  label: '今天',
                  value: 'day',
                },
                {
                  label: '本周',
                  value: 'week',
                },
                {
                  label: '本月',
                  value: 'month',
                },
              ]}
            />
          </div>
          {!this.state.isMobile && (
            <div>
              <Search  placeholder="搜索" searchText="" />
            </div>
          )}
        </IceContainer>
        <IceContainer className="stylestableCard">
          <Table dataSource={data} hasBorder={false}>
            <Table.Column title="顺序" cell={this.renderOrder} width={45} />
            <Table.Column title="活动名称" dataIndex="title" width={85} />
            <Table.Column title="备注" dataIndex="memo" width={150} />
            <Table.Column title="有效时间" dataIndex="validity" width={85} />
            <Table.Column title="负责人" dataIndex="owner" width={85} />
          </Table>
          <div className="stylespagination">
            <Pagination />
          </div>
        </IceContainer>
      </div>
    );
  }
}


