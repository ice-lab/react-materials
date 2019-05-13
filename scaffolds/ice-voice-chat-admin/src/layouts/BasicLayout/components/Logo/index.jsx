import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/" className={styles.logoStyle}>
        语音对话平台
      </Link>
    );
  }
}
