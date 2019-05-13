import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Address extends Component {
  static displayName = 'Address';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainTitle}>ADDRESS</div>
          <div className={styles.mainDesc}>会议地址及场馆信息</div>
          <img
            src="https://img.alicdn.com/tfs/TB17C4AuKOSBuNjy0FdXXbDnVXa-2520-1080.jpg"
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    );
  }
}

