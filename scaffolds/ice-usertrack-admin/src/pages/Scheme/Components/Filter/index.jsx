import React, { Component } from 'react';
import { Grid, Input } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Filter extends Component {
  onChange = (value) => {
    if (!value) {
      return;
    }
    this.props.onChange(value);
  };

  render() {
    return (
      <IceContainer className={styles.container}>
        <Row className={styles.row}>
          <Col l="2">
            <div className={styles.label}>方案名称:</div>
          </Col>
          <Col>
            <Input
              placeholder="请输入方案名称"
              hasClear
              onChange={this.onChange}

            />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}
