import React, { Component } from 'react';
import InfoWindow from './components/InfoWindow';
import WorkingIndex from './components/WorkingIndex';
import Transaction from './components/Transaction';
import Function from './components/Function';
import Warning from './components/Warning';
import WorkingCalendar from './components/WorkingCalendar';
import styles from './index.module.scss';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';
  render() {
    return (
      <div className={styles.container}>
        <InfoWindow />
        <WorkingIndex />
        <Transaction />
        <Function />
        <Warning />
        <WorkingCalendar />
      </div>
    );
  }
}


