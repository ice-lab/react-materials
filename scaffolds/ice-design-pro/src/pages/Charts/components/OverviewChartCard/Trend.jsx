import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';
export default class Field extends Component {
  static displayName = 'Field';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.trendItems}>
          <div className={styles.trendItem}>
            <span>
              <FormattedMessage id="app.chart.general.overview.week" />
              <span className={styles.trendRate}>12%</span>
            </span>
            <span className={styles.arrowIcon}>
              <Icon type="arrow-down-filling" size="xxs" />
            </span>
          </div>
          <div className={styles.trendItem}>
            <span>
              <FormattedMessage id="app.chart.general.overview.day" />
              <span className={styles.trendRate}>10%</span>
            </span>
            <span className={styles.arrowIcon}>
              <Icon type="arrow-up-filling" size="xxs" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
