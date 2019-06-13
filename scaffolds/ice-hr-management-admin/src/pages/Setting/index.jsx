import React, { Component } from 'react';
import BaseSetting from './components/BaseSetting';

import styles from './index.module.scss'

export default class Setting extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BaseSetting />
      </div>
    );
  }
}
