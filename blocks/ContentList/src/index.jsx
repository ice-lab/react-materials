import React, { Component } from 'react';
import Filter from './Filter';
import Lists from './Lists';

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Filter />
        <Lists />
      </div>
    );
  }
}
