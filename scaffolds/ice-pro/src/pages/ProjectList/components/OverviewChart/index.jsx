import React from 'react';
import { Grid, Progress } from '@alifd/next';
import { injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default injectIntl((props) => {
  const {
    intl: { formatMessage },
  } = props;
  const i18n = (value) => formatMessage({ id: value });
  const mockData = [
    {
      percent: 100,
      title: i18n('app.list.project.overview.all'),
      value: 3841,
    },
    {
      percent: 60,
      title: i18n('app.list.project.overview.unsolved'),
      value: 2931,
    },
    {
      percent: 10,
      title: i18n('app.list.project.overview.pending'),
      value: 384,
    },
    {
      percent: 30,
      title: i18n('app.list.project.overview.solved'),
      value: 2398,
    },
  ];

  return (
    <Row wrap>
      {mockData.map((item, index) => {
        return (
          <Col xxs="24" l="6" key={index}>
            <IceContainer className={styles.container}>
              <Progress percent={item.percent} state="error" shape="circle" />
              <div className={styles.content}>
                <p className={styles.value}>{item.value}</p>
                <h4 className={styles.title}>{item.title}</h4>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
});
