import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default class EmptyContent extends Component {
  static displayName = 'EmptyContent';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.exceptionContent}>
        <IceContainer>
          <div className={styles.exceptionContent}>
            <img
              src={require('./images/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png')}
              style={styles.image}
              className={styles.imgException}
              alt="empty"
            />
            <div style={styles.prompt}>
              <h3 className={styles.title}>
                页面暂无内容
              </h3>
              <p className={styles.description}>
                抱歉，页面暂无内容，请看看其他页面
              </p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}

// const styles = {
//   exceptionContent: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     color: '#333',
//   },
//   description: {
//     color: '#666',
//   },
// };
