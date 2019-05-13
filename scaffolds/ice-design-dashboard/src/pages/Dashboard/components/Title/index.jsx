import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Title extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>某某电商销售数据大盘</h3>
      </div>
    );
  }
}

