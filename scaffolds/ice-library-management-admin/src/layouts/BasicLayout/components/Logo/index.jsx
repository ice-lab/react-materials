import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class Index extends PureComponent {
  render() {
    return (
      <Link to="/"  className={ `${styles.logoStyle} ${this.props.style}`}>
        图书馆管理系统
      </Link>
    );
  }
}


