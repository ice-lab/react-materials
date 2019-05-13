/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default class Field extends Component {
  static displayName = 'Field';

  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, value } = this.props;
    return (
      <div className={styles.field}>
        <span>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
    );
  }
}
