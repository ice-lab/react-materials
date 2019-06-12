import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  render() {
    const contentStyle = {
      height: this.state.isMobile ? '300px' : '600px',
    };
    return (
      <div className={styles.container}>
        <div className={styles.content} style={{...contentStyle }}>
          <div className={styles.col}>
            <h2 className={styles.title}>功能描述</h2>
            <p className={styles.description}>
              功能描述的文案，功能描述的文案功能描述的文案功能描述的文案
            </p>
          </div>
          <div className={styles.col}>
            <img
              src={require('./images/TB1MgyDjsLJ8KJjy0FnXXcFDpXa-618-1046.png')}
              alt="img"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    );
  }
}


