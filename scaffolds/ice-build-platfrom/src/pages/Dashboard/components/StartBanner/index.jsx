import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class StartBanner extends Component {
  static displayName = 'StartBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <a
          href="#"
          className={`${styles.link} ${styles.startLink}`}
          size="large"
        >
          起步教程
        </a>
        <Link
          to="/new"
          className={`${styles.link} ${styles.builderLink}`}
          size="large"
        >
          添加你的第一个构建器
        </Link>
      </div>
    );
  }
}


