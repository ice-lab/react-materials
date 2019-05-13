

import React, { Component } from 'react';

import FailureDetail from './components/FailureDetail';

export default class Fail extends Component {
  static displayName = 'Fail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="fail-page">
        <FailureDetail />
      </div>
    );
  }
}
