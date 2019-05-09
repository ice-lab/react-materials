import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class FilterWithSearch extends Component {
  static displayName = 'FilterWithSearch';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectFilter = (type) => {
    console.log(type);
    // type can be 'all', 'process', 'pending'
    // handler
  };

  handleSearch = () => {
    // handler logical
  };

  render() {
    return (
      <div className={styles.filterWithSearch}>
        <IceContainer
          className="filter-with-search-container"
          className={styles.filterWithSearchContainer}
        >
          <Row wrap justify="space-between" className={styles.row}>
            <Col xxs={24} s={8} className={styles.filterContainer}>
              <span
                className="filter-item selected"
                className={styles.filterItem}
                onClick={this.selectFilter.bind(this, 'all')}
              >
                全部
              </span>
              <span
                className={styles.filterItem}
                onClick={this.selectFilter.bind(this, 'process')}
              >
                进行中
              </span>
              <span
                className={styles.filterItem}
                onClick={this.selectFilter.bind(this, 'pending')}
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
                onSearch={this.handleSearch}
                className={styles.sty}
              />
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}