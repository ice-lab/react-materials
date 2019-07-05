import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Table, Progress } from '@alifd/next';
import LintChart from './LineChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const activePages = [
  { id: 1, page: '/getting', amount: '2,80,489', percent: 90 },
  { id: 2, page: '/home', amount: '1,98,956', percent: 70 },
  { id: 3, page: '/pricing', amount: '1,90,257', percent: 60 },
  { id: 4, page: '/about', amount: '1,80,745', percent: 50 },
  { id: 5, page: '/blog', amount: '1,24,693', percent: 40 },
  { id: 6, page: '/support', amount: '8,489', percent: 35 },
  { id: 7, page: '/team', amount: '5,233', percent: 30 },
  { id: 8, page: '/faq', amount: '1,688', percent: 20 },
];

const ViewedProducts = [
  {
    id: 1,
    pic: require('./images/img1.jpg'),
    title: 'Apple/苹果',
    cate: '电子产品',
    amount: '38,600',
  },
  {
    id: 2,
    pic: require('./images/img2.jpg'),
    title: 'Xiaomi/小米5X',
    cate: '电子产品',
    amount: '33,779',
  },
  {
    id: 3,
    pic: require('./images/img3.jpg'),
    title: '天猫精灵',
    cate: '智能家居',
    amount: '29,588',
  },
  {
    id: 4,
    pic: require('./images/img4.jpg'),
    title: '小米盒子3',
    cate: '智能小家电',
    amount: '8,636',
  },
];

export default function TopActiveChart() {
  function renderProduct(value, index, record) {
    return (
      <div className={styles.product}>
        <img src={record.pic} className={styles.productPic} alt="" />
        <p className={styles.productTitle}>
          {record.title}
        </p>
      </div>
    );
  }

  return (
    <Row wrap gutter="20">
      <Col xxs="24" s="12" l="12">
        <IceContainer title="活跃页面">
          <Table
            dataSource={activePages}
            hasBorder={false}
            hasHeader={false}
            className={styles.table}
          >
            <Table.Column title="ID" dataIndex="id" width="5%" />
            <Table.Column title="页面" dataIndex="page" />
            <Table.Column title="销售数量" dataIndex="amount" />
            <Table.Column
              title="销售占比"
              dataIndex="page"
              cell={(value, index, record) => (
                <Progress percent={record.percent} />
              )}
            />
          </Table>
        </IceContainer>
      </Col>
      <Col xxs="24" s="12" l="12">
        <IceContainer title="浏览最多">
          <Table
            dataSource={ViewedProducts}
            hasBorder={false}
            hasHeader={false}
            className={styles.table}
          >
            <Table.Column
              title="产品"
              dataIndex="title"
              cell={(value, index, record) => renderProduct(value, index, record)}
              width="40%"
            />
            <Table.Column title="分类" dataIndex="cate" width="20%" />
            <Table.Column title="销售数量" dataIndex="amount" width="20%" />
            <Table.Column
              title="销售趋势"
              width="20%"
              lock="right"
              cell={() => (<LintChart />)}
            />
          </Table>
        </IceContainer>
      </Col>
    </Row>
  );
}
TopActiveChart.displayName = 'TopActiveChart';
