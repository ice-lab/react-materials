import React, { Component } from 'react';
import MemberFrom from './components/MemberForm';

import styles from './index.module.scss'

export default class AddMember extends Component {
  render() {
    return (
      <div>
        <MemberFrom />
      </div>
    );
  }
}
