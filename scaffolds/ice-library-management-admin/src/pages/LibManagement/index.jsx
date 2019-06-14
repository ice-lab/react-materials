import React, { Component } from 'react';
import LibTable from './components/LibTable/index';

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
        <LibTable />
      </div>
    );
  }
}
