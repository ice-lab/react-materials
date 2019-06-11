import React, { Component } from 'react';
import { Grid, Input, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Filter extends Component {
  static displayName = 'Filter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

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
          size="large"
          className={styles.box}
        />
      </IceContainer>
    );
  }
}

