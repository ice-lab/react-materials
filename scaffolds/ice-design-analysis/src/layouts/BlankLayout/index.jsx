import React, { Component } from 'react';
import MainRoutes from './MainRoutes';
import styles from './index.module.scss';

export default class BlankLayout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <MainRoutes />
      </div>
    );
  }
}


