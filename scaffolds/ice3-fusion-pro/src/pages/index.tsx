import { definePageConfig } from 'ice';

export default function Dashboard() {
  return (
    // <Row gutter={[16, 16]}>
    //   <Col xs={24} sm={12} md={6}>
    //     <CardBarChart />
    //   </Col>
    //   <Col xs={24} sm={12} md={6}>
    //     <CardAreaChart />
    //   </Col>
    //   <Col xs={24} sm={12} md={6}>
    //     <CardTypebarChart />
    //   </Col>
    //   <Col xs={24} sm={12} md={6}>
    //     <CardLineChart />
    //   </Col>
    //   <Col span={24}>
    //     <CardRankChart />
    //   </Col>
    //   <Col span={8}>
    //     <CardPieChart />
    //   </Col>
    //   <Col span={16}>
    //     <CardGroupBarChart />
    //   </Col>
    // </Row>
    <>12</>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
  };
});
