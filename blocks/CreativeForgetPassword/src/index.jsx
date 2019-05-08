import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import ForgetPasswordIntro from './ForgetPasswordIntro';
import ForgetPasswordForm from './ForgetPasswordForm';
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
            <ForgetPasswordIntro />
          </Col>
          <Col l="12">
            <div className={styles.content}>
              <ForgetPasswordForm />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

