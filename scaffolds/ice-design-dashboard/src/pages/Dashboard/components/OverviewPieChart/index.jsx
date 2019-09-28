import React from 'react';
import { Chart, Geom, Tooltip, Coord } from 'bizcharts';
import { Grid } from '@alifd/next';
import ContainetCard from '@/components/ContainerCard';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    chartData: [{ type: 'A', value: 20 }, { type: 'B', value: 80 }],
    title: '杭州',
    summary: '网络销售',
  },
  {
    chartData: [{ type: 'A', value: 60 }, { type: 'B', value: 48 }],
    title: '上海',
    summary: '门店销售',
  },
  {
    chartData: [{ type: 'A', value: 90 }, { type: 'B', value: 10 }],
    title: '北京',
    summary: '新零售',
  },
];

export default function OverviewPieChart() {
  return (
    <Row wrap gutter="20">
      {mockData.map((item, index) => {
        return (
          <Col xxs="24" l="8" key={index}>
            <ContainetCard>
              <Chart height={200} data={item.chartData} forceFit padding={10}>
                <Coord type="theta" innerRadius={0.75} />
                <Tooltip showTitle={false} />
                <Geom
                  type="intervalStack"
                  position="value"
                  color="type"
                  shape="sliceShape"
                />
              </Chart>
              <div className={styles.content}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.summary}>{item.summary}</p>
              </div>
            </ContainetCard>
          </Col>
        );
      })}
    </Row>
  );
}
