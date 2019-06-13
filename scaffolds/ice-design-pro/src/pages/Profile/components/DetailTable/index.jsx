import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { FormattedMessage } from 'react-intl';
import styles from './index.module.scss';

export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-table">
        <IceContainer title="任务详情">
          <ul className={styles.detailTable}>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.task.label" />：
              </div>
              <div className={styles.detailBody}>
                <FormattedMessage id="app.profile.table.task.value" />
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.amount.label" />：
              </div>
              <div className={styles.detailBody}>
                ¥ <FormattedMessage id="app.profile.table.amount.value" />
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.deliverytime.label" />
                ：
              </div>
              <div className={styles.detailBody}>
                <FormattedMessage id="app.profile.table.deliverytime.value" />
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.contact.label" />：
              </div>
              <div className={styles.detailBody}>
                <FormattedMessage id="app.profile.table.contact.value" />
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.status.label" />：
              </div>
              <div className={styles.detailBody}>
                <FormattedMessage id="app.profile.table.status.value" />
              </div>
            </li>
            <li className={styles.detailItem}>
              <div className={styles.detailTitle}>
                <FormattedMessage id="app.profile.table.address.label" />：
              </div>
              <div className={styles.detailBody}>
                <FormattedMessage id="app.profile.table.address.value" />
              </div>
            </li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}

