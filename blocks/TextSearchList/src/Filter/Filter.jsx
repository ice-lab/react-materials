import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import styles from  '../index.module.scss'

export default class Filter extends Component {
  render() {
    return (
      <IceContainer >
        <div className={styles.category}>
          <span className={styles.label}>所属类目：</span>
          <span className={styles.item}>全部</span>
          <span className={styles.item}>类目一</span>
          <span className={styles.item}>类目二</span>
          <span className={styles.item}>类目三</span>
          <span className={styles.item}>类目四</span>
        </div>
        <div className={styles.others}>
          <span className={styles.label}>其它筛选：</span>
          <span styclassNamele={styles.item}>全部</span>
          <span className={styles.item}>类目一</span>
          <span className={styles.item}>类目二</span>
          <span className={styles.item}>类目三</span>
          <span className={styles.item}>类目四</span>
        </div>
      </IceContainer>
    );
  }
}

