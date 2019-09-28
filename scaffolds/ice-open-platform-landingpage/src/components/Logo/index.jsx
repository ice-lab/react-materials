import React from 'react';
import styles from './index.module.scss';

const LIGHT = require('./images/TB1KmB6nntYBeNjy1XdXXXXyVXa-224-60.png');
const DARK = require('./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png');

export default function Logo(props) {
  const { isDark } = props;
  const logo = isDark ? DARK : LIGHT;
  return (
    <div
      className={styles.logo}
    >
      <a href="/" className={styles.position}>
        <img src={logo} width="129" height="35" alt="logo" />
      </a>
    </div>
  );
}
