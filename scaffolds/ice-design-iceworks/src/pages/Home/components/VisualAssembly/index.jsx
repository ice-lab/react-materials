/* eslint no-mixed-operators: 0 */
import React, { Component } from 'react';
import styles from './index.module.scss'

export default class VisualAssembly extends Component {
  static displayName = 'VisualAssembly';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapperContainer}>
        <div className={styles.cover}>
          <img
            alt="特点图"
            className={styles.coverImage}
            src={require('./images/TB1Xf7OpuuSBuNjy1XcXXcYjFXa-2334-1092.png')}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.feature}>
            <div className={styles.title}>区块可视化组装</div>
            <div className={styles.line}>
              <div className={styles.lineHeader} />
            </div>
            <div className={styles.desc}>
              海量物料自由搭配，轻松完成页面组合可视化操作更得心应手
            </div>
          </div>
        </div>
      </div>
    );
  }
}
