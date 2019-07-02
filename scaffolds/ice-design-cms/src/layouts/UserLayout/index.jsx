import React from 'react';
import { Grid } from '@alifd/next';
import Footer from './components/Footer';
import Intro from './components/Intro';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const UserLayout = (props) => (
  <div className={styles.container}>
    <div className={styles.mask} />
    <Row wrap className={styles.row}>
      <Col l="12">
        <Intro />
      </Col>
      <Col l="12">
        <div className={styles.form}>
          { props.children }
        </div>
      </Col>
    </Row>
    <Footer />
  </div>
);
export default UserLayout;
