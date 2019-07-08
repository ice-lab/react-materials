import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Timeline } from '@alifd/next';
import LineChart from './LineChart';
import styles from './index.module.scss'

const { Row, Col } = Grid;
const { Item: TimelineItem } = Timeline;

export default function ProjectStatus() {
  const renderTimeline = () => {
    return (
      <Timeline>
        <TimelineItem
          title="项目完成"
          content={<div>【标题】一段简单的说明当前项目的进度和状态</div>}
          time="2016-06-10 10:30:00"
          state="process"
        />
        <TimelineItem
          title="开发测试"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:30:00"
        />
        <TimelineItem
          title="项目启动"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
        <TimelineItem
          title="产品设计"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
        <TimelineItem
          title="分析调研"
          content="【标题】一段简单的说明当前项目的进度和状态"
          time="2016-06-10 09:03:00"
        />
      </Timeline>
    );
  };

  return (
    <div>
      <Row wrap gutter={20}>
        <Col xxs="24" l="12">
          <IceContainer title="完成进度">
            <LineChart />
            <div className={styles.projectStatus}>
              <p className={styles.meta}>项目状态</p>
              <h2 className={styles.count}>76,533</h2>
            </div>
          </IceContainer>
        </Col>
        <Col xxs="24" l="12">
          <IceContainer title="完成状态" className={styles.container}>
            {renderTimeline()}
          </IceContainer>
        </Col>
      </Row>
    </div>
  );
}

