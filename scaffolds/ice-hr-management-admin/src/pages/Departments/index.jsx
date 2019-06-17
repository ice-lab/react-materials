import React, { Component } from 'react';
import Overview from './components/Overview';
import DepartmentTable from './components/DepartmentTable';

import styles from './index.module.scss'

export default class Departments extends Component {
  render() {
    return (
      <div>
        <Overview />
        <DepartmentTable />
      </div>
    );
  }
}
