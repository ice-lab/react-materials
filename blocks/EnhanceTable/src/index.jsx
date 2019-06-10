/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { Table, Pagination, Tab, Search } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import data from './data';
import styles from './index.module.scss';

export default class EnhanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 'solved',
    };
  }

  renderTitle = (value, index, record) => {
    return (
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{record.title}</span>
      </div>
    );
  };

  editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  renderOperations = (value, index, record) => {
    return (
      <div
        className={styles.enhanceTableOperation}
      >
        <a
          href="#"
          className={styles.operation}
          target="_blank"
          onClick={this.editItem.bind(this, record)}
        >
          解决
        </a>
        <a href="#" className={styles.operation} target="_blank">
          详情
        </a>
        <a href="#" className={styles.operation} target="_blank">
          分类
        </a>
      </div>
    );
  };

  renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  changePage = (currentPage) => {
    this.queryCache.page = currentPage;

    this.fetchData();
  };

  onTabChange = (tabKey) => {
    this.setState({
      activeKey: tabKey,
    });
    this.queryCache.activeKey = tabKey;

    if (tabKey === 'solved') {
      this.fetchData();
    } else if (tabKey === 'needFix') {
      this.fetchData();
    } else {
      console.log(`你点击了 ${tabKey}`);
    }
  };

  onSearch = (value) => {
    this.queryCache.keywords = value.key;
    this.fetchData();
  };

  render() {
    return (
      <div>
        <IceContainer className={styles.card}>
          <div>
            <Tab
              onChange={this.onTabChange}
              size="small"
              shape="text"
              activeKey={this.state.activeKey}
              contentStyle={{ display: 'none' }}
            >
              <Tab.Item
                key="solved"
                title={
                  <span>
                    已解决 <span className={styles.tabCount}>123</span>
                  </span>
                }
              />
              <Tab.Item
                key="needFix"
                title={
                  <span>
                    待解决 <span className={styles.tabCount}>10</span>
                  </span>
                }
              />
              <Tab.Item
                key="needValidate"
                title={
                  <span>
                    待验证 <span className={styles.tabCount}>2</span>
                  </span>
                }
              />
            </Tab>
          </div>
          <div className={styles.extraFilter}>
            <Search
              className={styles.search}
              type="primary"
              style={{width: 150}}
              placeholder="搜索"
              searchText=""
              onSearch={this.onSearch}
            />
          </div>
        </IceContainer>
        <IceContainer>
          <Table
            dataSource={data}
            className="basic-table"
            // style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="问题描述"
              cell={this.renderTitle}
              width={320}
            />
            <Table.Column title="问题分类" dataIndex="type" width={85} />
            <Table.Column
              title="发布时间"
              dataIndex="publishTime"
              width={150}
            />
            <Table.Column
              title="状态"
              dataIndex="publishStatus"
              width={85}
              cell={this.renderStatus}
            />
            <Table.Column
              title="操作"
              dataIndex="operation"
              width={150}
              cell={this.renderOperations}
            />
          </Table>
          <div className={styles.pagination}>
            <Pagination />
          </div>
        </IceContainer>
      </div>
    );
  }
}
