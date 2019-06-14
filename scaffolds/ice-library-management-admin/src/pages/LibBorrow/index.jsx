import React, { Component } from 'react';
import BorrowForm from './components/BorrowForm/index';

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
        <BorrowForm />
      </div>
    );
  }
}
