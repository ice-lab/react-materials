import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import RegisterIntro from './RegisterIntro';
import RegisterForm from './RegisterForm';
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
            <RegisterIntro />
          </Col>
          <Col l="12">
            <div className={styles.content}>
              <RegisterForm />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

// const styles = {
//   container: {
//     position: 'relative',
//     width: '100wh',
//     minWidth: '1200px',
//     height: '100vh',
//     backgroundImage: `url(${require('./images/bg.jpg')})`,
//   },
//   content: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
// };
