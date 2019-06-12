import React, { Component } from 'react';
import { Input, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
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
      <IceContainer className={styles.containerFilter}>
        <div className={styles.label}>方案名称:</div>
        <Input placeholder="请输入方案名称" hasClear onChange={this.onChange} />
        <Button type="primary" className={styles.button}>
          查 询
        </Button>
      </IceContainer>
    );
  }
}


