import React from 'react';
import { Grid, Progress } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { injectIntl } from 'react-intl';
import Head from './Head';
import Field from './Field';
import Trend from './Trend';
import ColumnChart from './ColumnChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

function OverviewChartCard(props) {
  const {
    intl: { formatMessage },
  } = props;
  return (
    <Row wrap>
      <Col xxs="24" l="6">
        <IceContainer>
          <Head
            title={formatMessage({
              id: 'app.chart.general.overview.sales.title',
            })}
            content="数据说明"
            total="¥ 126,560"
          />
          <Trend />
          <Field
            label={formatMessage({
              id: 'app.chart.general.ovrview.sales.daily',
            })}
            value="￥16,245"
          />
        </IceContainer>
      </Col>
      <Col xxs="24" l="6">
        <IceContainer>
          <Head
            title={formatMessage({
              id: 'app.chart.general.overview.visits.title',
            })}
            content="数据说明"
            total="¥ 6,238"
          />
          <ColumnChart type="area" />
          <Field
            label={formatMessage({
              id: 'app.chart.general.ovrview.visits.daily',
            })}
            value="2,365"
          />
        </IceContainer>
      </Col>
      <Col xxs="24" l="6">
        <IceContainer>
          <Head
            title={formatMessage({
              id: 'app.chart.general.overview.vol.title',
            })}
            content="数据说明"
            total="9,653"
          />
          <ColumnChart />
          <Field
            label={formatMessage({
              id: 'app.chart.general.ovrview.visits.cvr',
            })}
            value="58%"
          />
        </IceContainer>
      </Col>
      <Col xxs="24" l="6">
        <IceContainer>
          <Head
            title={formatMessage({
              id: 'app.chart.general.overview.ratio.title',
            })}
            content="数据说明"
            total="51%"
          />
          <div
            style={{ height: '64px', display: 'flex', alignItems: 'center' }}
          >
            <Progress percent={51} />
          </div>
          <Trend className={styles.footer} />
        </IceContainer>
      </Col>
    </Row>
  );
}

export default injectIntl(OverviewChartCard);
