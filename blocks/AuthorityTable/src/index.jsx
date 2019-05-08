import React, { Component } from 'react';
import TableFilter from './TableFilter';
import CustomTable from './CustomTable';
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
        <TableFilter />
        <CustomTable />
      </div>
    );
  }
}


