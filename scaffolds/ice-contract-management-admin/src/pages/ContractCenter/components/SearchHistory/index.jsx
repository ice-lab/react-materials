import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import ContainerTitle from '../../../../components/ContainerTitle';
import styles from './index.module.scss'

const mockData = [
  {
    time: '2018-09-19 11:56:12',
    keywords: [
      {
        label: '合同关键字',
        value: '聘用合同',
        name: 'name',
      },
    ],
  },
  {
    time: '2018-09-21 18:26:36',
    keywords: [
      {
        label: '合同编号',
        value: '000001',
        name: 'id',
      },
      {
        label: '对方公司',
        value: 'option1',
        name: 'otherCompany',
      },
    ],
  },
  {
    time: '2018-09-22 08:32:33',
    keywords: [
      {
        label: '合同编号',
        value: '000001',
        name: 'id',
      },
      {
        label: '申请单号',
        value: '94348394820',
        name: 'applyCode',
      },
      {
        label: '负责人',
        value: '淘小宝',
        name: 'principal',
      },
    ],
  },
];

export default class SearchHistory extends Component {
  static displayName = 'SearchHistory';

  static propTypes = {
    onSearchHistory: PropTypes.func,
  };

  static defaultProps = {
    onSearchHistory: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearchAgain = (data) => {
    const query = {};
    data.keywords.forEach((item) => {
      query[item.name] = item.value;
    });
    this.props.onSearchHistory(query);
  };

  render() {
    return (
      <IceContainer className={styles.container}>
        <ContainerTitle title="搜索历史" />
        <div className={styles.historyList}>
          {mockData.map((item, index) => {
            return (
              <div className={styles.historyItem} key={index}>
                <div className={styles.itemInfo}>
                  <span className={styles.time}>{item.time}</span>
                  <Button
                    text
                    className={styles.query}
                    onClick={this.onSearchAgain.bind(this, item)}
                  >
                    再次查询
                  </Button>
                </div>
                <div className={styles.keywords}>
                  {item.keywords.map((keyword, key) => {
                    return (
                      <div className={styles.keyword} key={key}>
                        <span className={styles.label}>{keyword.label}：</span>
                        <span className={styles.value}>{keyword.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </IceContainer>
    );
  }
}
