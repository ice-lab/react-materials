import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import CustomChart from './CustomChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="chart-facet">
        <IceContainer>
          <h4 className={styles.title}>分面图</h4>
          <Row wrap>
            <Col xxs="24" l="12">
              <CustomChart />
            </Col>
            <Col xxs="24" l="12">
              <CustomChart />
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}


