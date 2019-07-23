import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';

export default function Trend(props) {
  const { className } = props;
  const wrapperClassName = styles.content + (className ? ` ${className}` : '');

  return (
    <div className={wrapperClassName}>
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
