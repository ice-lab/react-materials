import React, { Component } from 'react';
import styles from './index.module.scss'

export default class Banner extends Component {
  static displayName = 'Banner';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>ICE DESIGN 海量物料</div>
          <div className={styles.desc}>淘宝中后台 & 让前端开发简单而友好</div>
          <a className={styles.link}>开始使用</a>
        </div>
      </div>
    );
  }
}
