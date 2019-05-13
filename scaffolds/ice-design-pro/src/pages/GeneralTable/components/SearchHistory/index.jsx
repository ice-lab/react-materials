import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { injectIntl } from 'react-intl';
import ContainerTitle from '../ContainerTitle';
import styles from './index.module.scss';

const mockData = [
  {
    time: '2018-09-19 11:56:12',
    keywords: [
      {
        label: '合同关键字',
        value: '聘用合同',
      },
    ],
  },
  {
    time: '2018-09-21 18:26:36',
    keywords: [
      {
        label: '合同编号',
        value: '000001',
      },
      {
        label: '对方公司',
        value: '杭州xxx科技公司',
      },
    ],
  },
  {
    time: '2018-09-22 08:32:33',
    keywords: [
      {
        label: '合同编号',
        value: '000001',
      },
      {
        label: '申请单号',
        value: '94348394820',
      },
      {
        label: '负责人',
        value: '淘小宝',
      },
    ],
  },
];

@injectIntl
export default class SearchHistory extends Component {
  static displayName = 'SearchHistory';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleQuery = () => {
    this.props.fetchData();
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <IceContainer className={styles.container}>
        <ContainerTitle
          title={formatMessage({ id: 'app.general.history.title' })}
        />
        <div className={styles.historyList}>
          {mockData.map((item, index) => {
            return (
              <div className={styles.historyItem} key={index}>
                <div className={styles.itemInfo}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.query} onClick={this.handleQuery}>
                    再次查询
                  </span>
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