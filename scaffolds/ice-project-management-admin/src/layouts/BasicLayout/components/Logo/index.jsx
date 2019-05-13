import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss'

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/" style={{...this.props.style }} className={styles.logoStyle}>
        项目管理系统
      </Link>
    );
  }
}
