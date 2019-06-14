import React, { Component } from 'react';
import BoardList from './components/BoardList';

import styles from './index.module.scss'

export default class TaskBoard extends Component {
  render() {
    return <BoardList />;
  }
}
