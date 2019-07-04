import React from 'react';
import { Chart, Geom, Tooltip, Coord } from 'bizcharts';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    chartData: [{ type: '分类一', value: 20 }, { type: '分类二', value: 80 }],
    title: '销售占比',
    summary: '新零售',
  },
  {
    chartData: [{ type: '分类一', value: 60 }, { type: '分类二', value: 48 }],
    title: '销售占比',
    summary: '实体店',
  },
  {
    chartData: [{ type: '分类一', value: 90 }, { type: '分类二', value: 10 }],
    title: '销售占比',
    summary: '淘宝店',
  },
];

export default function OverviewPieChart() {
  return (
    <IceContainer title="概览数据">
      <Row wrap>
        {mockData.map((item, index) => {
          return (
            <Col xxs="24" l="8" key={index}>
              <Chart height={200} data={item.chartData} forceFit padding={10}>
                <Coord type="theta" innerRadius={0.75} />
                <Tooltip showTitle={false} />
                <Geom
                  type="intervalStack"
                  position="value"
                  color={['type', ['#447eff', '#f7f7f7']]}
                  shape="sliceShape"
                />
              </Chart>
              <div className={styles.content}>
                <p className={styles.summary}>
                  {item.summary}
                </p>
                <h4 className={styles.title}>
                  {item.title}
                </h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}
