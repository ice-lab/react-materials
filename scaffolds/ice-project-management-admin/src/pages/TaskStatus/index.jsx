import React, { Component } from 'react';
import OverviewChart from './components/OverviewChart';
import TaskTable from './components/TaskTable';

import styles from './index.module.scss'

export default class TaskStatus extends Component {
  render() {
    return (
      <div>
        <OverviewChart />
        <TaskTable />
      </div>
    );
  }
}
