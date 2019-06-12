import React, { Component } from 'react';
import styles from './index.module.scss';

export default class LoginIntro extends Component {
  static displayName = 'LoginIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div  className={styles.containerForget}>
        <div className={styles.logo}>
          <a href="#" className={styles.link}>
            <img
              className={styles.logoImg}
              src={require('./images/logo.png')}
              alt="logo"
            />
          </a>
        </div>
        <div className={styles.title}>
          技术领域智能助手 <br />
          让沟通变得更加智能、高效、便捷
        </div>
        <p className={styles.description}>Amazing Stuff is Lorem Here.ICE Team</p>
        <div className={styles.border} />
      </div>
    );
  }
}


