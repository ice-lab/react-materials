import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import { injectIntl } from 'react-intl';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import styles from './index.module.scss';

function TabChart(props) {
  const {
    intl: { formatMessage },
  } = props;

  function handleChange(key) {
    console.log('change', key);
  }

  return (
    <div className={styles.container}>
      <IceContainer className={styles.card}>
        <Tab onChange={handleChange}>
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

export default injectIntl(TabChart);
