import { defineGetConfig, ClientOnly } from 'ice';
import { Row, Col } from 'antd';
import { lazy, Suspense } from 'react';

export default function Dashboard() {
  return (
    <ClientOnly fallback={<>loading...</>}>
      {() => {
        const CardBarChart = lazy(() => import('@/components/CardBarChart'));
        const CardAreaChart = lazy(() => import('@/components/CardAreaChart'));
        const CardTypebarChart = lazy(() => import('@/components/CardTypebarChart'));
        const CardLineChart = lazy(() => import('@/components/CardLineChart'));
        const CardRankChart = lazy(() => import('@/components/CardRankChart'));
        const CardPieChart = lazy(() => import('@/components/CardPieChart'));
        const CardGroupBarChart = lazy(() => import('@/components/CardGroupBarChart'));
        return (
          <Suspense>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <CardBarChart />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <CardAreaChart />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <CardTypebarChart />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <CardLineChart />
              </Col>
              <Col span={24}>
                <CardRankChart />
              </Col>
              <Col span={8}>
                <CardPieChart />
              </Col>
              <Col span={16}>
                <CardGroupBarChart />
              </Col>
            </Row>
          </Suspense>

        );
      }}
    </ClientOnly>
  );
}

export const getConfig = defineGetConfig(() => {
  return {
    auth: ['admin', 'user'],
  };
});
