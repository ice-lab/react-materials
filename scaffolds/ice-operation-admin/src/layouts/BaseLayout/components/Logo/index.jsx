import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className={styles.logo}>
        <span className={styles.brand}>LOGO</span>
        <div className={styles.workbench}>
          设备管理
          <br />
          工作台
        </div>
      </Link>
    );
  }
}
