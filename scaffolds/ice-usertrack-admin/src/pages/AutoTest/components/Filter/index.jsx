import React, { Component } from 'react';
import { Input } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default class Filter extends Component {
  onChange = (value) => {
    console.log({ value });
  };

  render() {
    return (
      <IceContainer className={styles.container}>
        <div className={styles.title}>搜索验证方案:</div>
        <Input
          placeholder="请输入验证方案"
          hasClear
          onChange={this.onChange}

          style={{ width: '300px' }}
        />
      </IceContainer>
    );
  }
}