import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Title extends Component {
  static displayName = 'Title';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p className={styles.title}>{this.props.data}</p>;
  }
}

