import React, { Component } from 'react';
import Overview from './components/Overview';
import EmployeeTable from './components/EmployeeTable';

import styles from './index.module.scss'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Overview />
        <EmployeeTable />
      </div>
    );
  }
}
