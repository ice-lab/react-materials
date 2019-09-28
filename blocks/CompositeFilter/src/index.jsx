import React, { useState, useEffect } from 'react';
import { Search, Tab, Tag, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

const TabItem = Tab.Item;

// mock data
const tagList = [
  {
    key: 'all',
    name: '全部商品',
  },
  {
    key: 'unclassified',
    name: '未分类',
  },
  {
    key: 'invalid',
    name: '已失效',
  },
  {
    key: 'haohuo',
    name: '有好货专用',
  },
  {
    key: 'bimai',
    name: '必买清单',
  },
];

export default function Index() {
  const [isMobile, setMobile] = useState(false);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const onTabChange = (key) => {
    console.log(`select tab is: ${key}`);
  };

  const onTagChange = (key, selected) => {
    console.log(`Tag: ${key} is ${selected ? 'selected' : 'unselected'}`);
  };

  const onDateChange = (value) => {
    console.log(value);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const renderTabBarExtraContent = () => {
    return (
      <div className={styles.extraFilter}>
        <DatePicker
          locale={{ datePlaceholder: '发布日期' }}
          onChange={onDateChange}
        />
        <Search
          placeholder="搜索"
          searchText=""
          onSearch={onSearch}
          className={styles.search}
          shape="simple"
        />
      </div>
    );
  };

  return (
    <div className="composite-filter">
      <IceContainer className={styles.filterCard}>
        <Tab
          shape="text"
          onChange={onTabChange}
          contentStyle={{ display: 'none' }}
          extra={
            !isMobile ? renderTabBarExtraContent() : null
          }
        >
          <TabItem title="全部" key="all" />
          <TabItem title="图文" key="pic" />
          <TabItem title="单品" key="item" />
          <TabItem title="店铺上新" key="new" />
          <TabItem title="短视频" key="video" />
        </Tab>

        <div className={styles.tagList}>
          {tagList.map((tag, index) => {
            return (
              <Tag.Selectable
                type="normal"
                key={index}
                className={styles.tag}
                onChange={(value) => onTagChange(tag.key, value)}
              >
                {tag.name}
              </Tag.Selectable>
            );
          })}
        </div>
      </IceContainer>
    </div>
  );
}
