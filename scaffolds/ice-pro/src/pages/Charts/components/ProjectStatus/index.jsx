import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Timeline } from '@alifd/next';
import { injectIntl, FormattedMessage } from 'react-intl';
import LineChart from './LineChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Item: TimelineItem } = Timeline;

function ProjectStatus(props) {
  function renderTimeline() {
    return (
      <Timeline>
        <TimelineItem
          title="市场调研"
          content={<div>【标题】一段简单的说明当前项目的进度和状态</div>}
          time="2016-06-10 10:30:00"
          state="process"
        />
        <TimelineItem
          title="产品评审"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:30:00"
        />
        <TimelineItem
          title="项目启动"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
        <TimelineItem
          title="营销推广"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
        <TimelineItem
          title="完成目标"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
      </Timeline>
    );
  }

  const {
    intl: { formatMessage },
  } = props;

  return (
    <Row wrap>
      <Col xxs="24" l="12" >
        <IceContainer
          title={formatMessage({
            id: 'app.chart.general.complete.schedule',
          })}
        >
          <LineChart />
          <div className={styles.projectStatus}>
            <p className={styles.meta}>
              <FormattedMessage id="app.chart.general.complete.state" />
            </p>
            <h2 className={styles.count}>76,533</h2>
          </div>
        </IceContainer>
      </Col>
      <Col xxs="24" l="12" >
        <IceContainer
          title={formatMessage({
            id: 'app.chart.general.complete.condition',
          })}
          className={styles.container}
        >
          {renderTimeline()}
        </IceContainer>
      </Col>
    </Row>
  );
}

export default injectIntl(ProjectStatus);
