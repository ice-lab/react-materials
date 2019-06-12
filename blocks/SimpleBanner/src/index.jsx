import React, { Component } from 'react';
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
          <div className={styles.caption}>机器学习算法模型服务平台</div>
          <div className={styles.caption}>
            支持 TensorFlow、PMML 模型的一键部署线上服务
          </div>
          <div className={styles.caption}>快捷、简约、稳定</div>
          <a className={styles.quickStart} href="#">
            马上使用
          </a>
        </div>
      </div>
    );
  }
}


