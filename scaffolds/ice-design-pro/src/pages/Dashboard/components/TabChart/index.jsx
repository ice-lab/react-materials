import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import { injectIntl } from 'react-intl';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import styles from './index.module.scss';

@injectIntl
export default class TabChart extends Component {
  static displayName = 'TabChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (key) => {
    console.log('change', key);
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className={styles.container}>
        <IceContainer className={styles.card}>
          <Tab onChange={this.handleChange}>
            <Tab.Item
              key="1"
              title={formatMessage({ id: 'app.dashboard.trend.income' })}
            >
              <SeriesLine />
            </Tab.Item>
            <Tab.Item
              key="2"
              title={formatMessage({ id: 'app.dashboard.trend.trans' })}
            >
              <BasicLine />
            </Tab.Item>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
