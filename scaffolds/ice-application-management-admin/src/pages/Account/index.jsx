import React, { Component } from 'react';
import UserForm from './components/UserForm';
import  styles from './index.module.scss'

export default class Account extends Component {
  static displayName = 'Account';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.accountpage}>
        <UserForm />
      </div>
    );
  }
}
