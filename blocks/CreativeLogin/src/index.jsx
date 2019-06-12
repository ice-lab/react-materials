import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import LoginIntro from './LoginIntro';
import LoginForm from './LoginForm';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Index extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className={styles.container}>
        <Row wrap>
          <Col l="12">
            <LoginIntro />
          </Col>
          <Col l="12">
            <div className={styles.content}>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


