import React from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function FilterWithSearch() {
  const selectFilter = (type) => {
    console.log(type);
    // type can be 'all', 'process', 'pending'
    // handler
  };

  const handleSearch = () => {
    // handler logical
  };

  return (
    <div className={styles.filterWithSearch}>
      <IceContainer
        className={styles.filterWithSearchContainer}
      >
        <Row wrap justify="space-between" className={styles.row}>
          <Col xxs={24} s={8} className={styles.filterContainer}>
            <span
              className={styles.filterItem}
              onClick={selectFilter('all')}
            >
              全部
            </span>
            <span
              className={styles.filterItem}
              onClick={selectFilter('process')}
            >
              进行中
            </span>
            <span
              className={styles.filterItem}
              onClick={selectFilter('pending')}
            >
              等待中
            </span>
          </Col>
          <Col xxs={24} s={16} className={styles.searchWrapper}>
            <Search
              inputWidth={250}
              shape="simple"
              searchText=""
              size="large"
              placeholder="请输入要搜索的关键词或商品链接"
              onSearch={handleSearch}
              className={styles.sty}
            />
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
