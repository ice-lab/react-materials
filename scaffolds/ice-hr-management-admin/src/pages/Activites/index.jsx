import React, { Component } from 'react';
import Overview from './components/Overview';
import ActivityTimeLine from './components/ActivityTimeLine';

import styles from './index.module.scss'

export default class Activites extends Component {
  render() {
    return (
      <div>
        <Overview />
        <ActivityTimeLine />
      </div>
    );
  }
}
