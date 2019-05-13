import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@alifd/next';
import Footer from './components/Footer';
import Intro from './components/Intro';
import routerData from '../../routerConfig';
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
              <Switch>
                {routerData.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={index}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  ) : null;
                })}

                <Redirect exact from="/user" to="/user/login" />
              </Switch>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}


