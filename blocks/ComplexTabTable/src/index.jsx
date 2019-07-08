import React, { useState } from 'react';
import { Table, Pagination, Tab, Search } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceImg from '@icedesign/img';
import IceLabel from '@icedesign/label';
import SubCategoryItem from './SubCategoryItem';
import data from './data';
import styles from  './index.module.scss';

const queryCache = {};
export default function Index() {
  const [isMobile] = useState(false);
  const [currentTab, setCurrentTab] = useState('solved');
  const [currentCategory, setCurrentCategory] = useState('1');
  const [tabList] = useState([
    {
      text: '已解决',
      count: '123',
      type: 'solved',
      subCategories: [
        {
          text: '申请账号失败',
          id: '1',
        },
        {
          text: '粉丝数为0',
          id: '2',
        },
        {
          text: '空间不足',
          id: '3',
        },
        {
          text: '系统报错',
          id: '4',
        },
        {
          text: '网络异常',
          id: '5',
        },
        {
          text: '不在范围',
          id: '6',
        },
      ],
    },
    {
      text: '待解决',
      count: '10',
      type: 'needFix',
      subCategories: [
        {
          text: '网络异常',
          id: '21',
        },
        {
          text: '空间不足',
          id: '22',
        },
      ],
    },
    {
      text: '待验证',
      count: '32',
      type: 'needValidate',
      subCategories: [
        {
          text: '系统报错',
          id: '34',
        },
        {
          text: '网络异常',
          id: '35',
        },
        {
          text: '不在范围',
          id: '36',
        },
      ],
    },
  ]);

  const renderTitle = (value, index, record) => {
    return (
      <div className={styles.titleWrapper}>
        <div>
          <IceImg src={record.cover} width={48} height={48} />
        </div>
        <span className={styles.title}>{record.title}</span>
      </div>
    );
  };

  const editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  const renderOperations = (value, index, record) => {
    return (
      <div className={styles.complexTabTableOperation}>
        <a
          href="#"
          className={styles.operation}
          target="_blank"
          onClick={() => editItem(record)}
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

  const renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  const fetchData = () => {
    console.log('fetch data');
  };

  const onSearch = () => {
    console.log('search data');
  };

  const onTabChange = (tabKey) => {
    const firstTabCatId = tabList.find((item) => {
      return item.type === tabKey;
    }).subCategories[0].id;

    setCurrentTab(tabKey);
    setCurrentCategory(firstTabCatId);
    queryCache.catId = firstTabCatId;
    fetchData();
  };

  const onSubCategoryClick = (catId) => {
    setCurrentCategory(catId);
    queryCache.catId = catId;
    fetchData();
  };

  const renderTabBarExtraContent = () => {
    return (
      <div className={styles.tabExtra}>
        <Search
          className={styles.search}
          type="secondary"
          placeholder="搜索"
          searchText=""
          onSearch={onSearch}
        />
      </div>
    );
  };

  return (
    <div className={styles.complexTabTable}>
      <IceContainer>
        <Tab
          onChange={onTabChange}
          shape="bar"
          currentTab={currentTab}
          contentStyle={{
            padding: 0,
          }}
          extra={
            !isMobile ? renderTabBarExtraContent() : null
          }
        >
          {tabList && tabList.length > 0
            ? tabList.map((tab) => {
                return (
                  <Tab.Item
                    key={tab.type}
                    title={
                      <span>
                        {tab.text}
                        <span className={styles.tabCount}>{tab.count}</span>
                      </span>
                    }
                  >
                    {tab.subCategories && tab.subCategories.length > 0
                      ? tab.subCategories.map((catItem, index) => {
                          return (
                            <SubCategoryItem
                              {...catItem}
                              isCurrent={
                                catItem.id === currentCategory
                              }
                              onItemClick={onSubCategoryClick}
                              key={index}
                            />
                          );
                        })
                      : null}
                  </Tab.Item>
                );
              })
            : null}
        </Tab>
      </IceContainer>
      <IceContainer>
        <Table
          dataSource={data}
          className={`basic-table ${styles.basicTable}`}
          hasBorder={false}
        >
          <Table.Column
            title="问题描述"
            cell={renderTitle}
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
            cell={renderStatus}
          />
          <Table.Column
            title="操作"
            dataIndex="operation"
            width={150}
            cell={renderOperations}
          />
        </Table>
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
