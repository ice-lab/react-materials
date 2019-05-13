import React, { Component } from 'react';
import BaseSetting from './components/BaseSetting/index';

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
