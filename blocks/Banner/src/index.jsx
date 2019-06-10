import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss'
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
        <QueueAnim
          type="bottom"
          delay={100}
          duration={1000}
          className="home-title"
        >
          <div key="content" className={styles.content}>
            <div className={styles.title}>
              <img
                src={require('./images/title.gif')}
                alt=""
                className={styles.titlePic}
              />
            </div>

            <div className={styles.time}>
              <img
                src={require('./images/time.png')}
                alt=""
                className={styles.timePic}
              />
            </div>

            <div className={styles.button}>
              <a href="#" className={styles.link}>
                立即购票
              </a>
            </div>
          </div>
        </QueueAnim>
      </div>
    );
  }
}
