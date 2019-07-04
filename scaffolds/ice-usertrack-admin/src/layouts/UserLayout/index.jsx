import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import Footer from './components/Footer';
import Intro from './components/Intro';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class UserLayout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row wrap className={styles.row}>
          <Col l="12">
            <Intro />
          </Col>
          <Col l="12">
            <div className={styles.form}>
              {this.props.children}
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
