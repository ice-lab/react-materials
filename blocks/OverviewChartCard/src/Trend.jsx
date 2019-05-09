import React, { Component } from 'react';
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
      <div className={`${styles.content} ${style}`} >
        <div className={styles.trendItems}>
          <div className={styles.trendItem}>
            <span>
              周同比<span className={styles.trendRate}>12%</span>
            </span>
            <span className={styles.arrowIcon}>
              <Icon type="arrow-down-filling" size="xxs" />
            </span>
          </div>
          <div className={styles.trendItem}>
            <span>
              日同比<span className={styles.trendRate}>10%</span>
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


