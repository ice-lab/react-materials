import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import CustomTable from './CustomTable';
import PirChart from './PieChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function TableChartCard() {
  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>
        <FormattedMessage id="app.base.table.title" />
      </h4>
      <Row wrap>
        <Col l="8">
          <PirChart />
        </Col>
        <Col l="16">
          <CustomTable />
        </Col>
      </Row>
    </IceContainer>
  );
}
