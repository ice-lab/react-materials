import React, { Component } from '_react@16.8.6@react';
import Filter from './components/Filter';
import Content from './components/Content';

export default class TestManagement extends Component {
  static displayName = 'TestManagement';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Filter />
        <Content />
      </div>
    );
  }
}
