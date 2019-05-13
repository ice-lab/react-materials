import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss';

export default class Banner extends Component {
  static displayName = 'Banner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
            <div key="title" className={styles.title}>
              云栖极客派
            </div>
            <div key="logo" className={styles.logo}>
              <img
                src={require('./images/logo.png')}
                alt=""
                className={styles.image}
              />
            </div>
          </QueueAnim>
        </div>
      </div>
    );
  }
}

