import React, { useState } from 'react';
import { Table } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const mockData = [
  {
    price: 'US $2.45',
    status: '0',
    id: 1,
    product: [
      {
        description: '2017秋新款女韩版宽松一字领长袖打底衫套头针织薄款上衣',
        title: '单号：234253124122414',
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 2,
        product: [
          {
            description: 'Free shipping women Casual dresses lady dress plus size 2014',
            avatar: require('./images/placeholder.jpg'),
          },
        ],
      },
    ],
  },
  {
    price: 'US $2.5',
    status: 1,
    id: 2,
    product: [
      {
        description: '冬季美翻天90白鹅绒保暖连帽狐狸毛羽绒服外套',
        title: '单号：1567562412414',
        avatar: require('./images/placeholder.jpg'),
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 2,
        product: [
          {
            description: '冬季美翻天90白鹅绒保暖连帽狐狸毛羽绒服外套',
            avatar: require('./images/placeholder.jpg'),
          },
        ],
      },
    ],
  },
  {
    price: 'US $2.5',
    status: 1,
    id: 3,
    product: [
      {
        description:
          '柒柒家2017冬新款韩国时尚刺绣加厚超大毛领羽绒服女中长款过膝潮',
        title: '单号：145425342414',
        avatar: require('./images/placeholder.jpg'),
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 2,
        product: [
          {
            description: '冬季美翻天90白鹅绒保暖连帽狐狸毛羽绒服外套',
            avatar: require('./images/placeholder.jpg'),
          },
        ],
      },
    ],
  },
  {
    price: 'US $2.5',
    status: 1,
    id: 4,
    product: [
      {
        description: '宽松大码长袖镂空打底衫',
        title: '单号：12312412412414',
        avatar: require('./images/placeholder.jpg'),
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 2,
        product: [
          {
            description: '冬季美翻天90白鹅绒保暖连帽狐狸毛羽绒服外套',
            avatar: require('./images/placeholder.jpg'),
          },
        ],
      },
    ],
  },
];

export default function Index() {
  const [tableData] = useState(mockData);

  /**
   * 渲染订单信息
   */
  const renderOrderInfo = (product) => {
    return (
      <div className={`${styles.orderInfo} order-info`}>
        <img src={product[0].avatar} className={styles.orderImg} alt="头像" />
        <div className={`${styles.orderDescription} order-description`}>
          {product[0].description}
        </div>
      </div>
    );
  };

  /**
   * 渲染订单价格
   */
  const renderOrderPrice = (price) => {
    return <b>{price}</b>;
  };

  /**
   * 渲染订单单号
   */
  const renderOrderNumber = (record) => {
    return <div>{record.product[0].title}</div>;
  };

  /**
   * 设置每一行的样式名称
   */
  const getRowClassName = (record) => {
    if (record.status === 0) {
      return 'highlight-row';
    }
  };

  /**
   * 渲染操作行
   */
  const renderOperation = () => {
    return (
      <a href="/" className={styles.orderDetailLink}>
        查看
      </a>
    );
  };

  /**
   * 选中当前行的回调
   */
  const handleRowSelection = (selectedRowKeys, records) => {
    console.log('selectedRowKeys:', selectedRowKeys);
    console.log('records:', records);
  };

  return (
    <div className={`${styles.orderList} order-list`}>
      <IceContainer title="订单列表">
        <Table
          dataSource={tableData}
          getRowClassName={getRowClassName}
          hasBorder={false}
          rowSelection={handleRowSelection}
        >
          <Table.GroupHeader cell={renderOrderNumber} />
          <Table.Column
            cell={renderOrderInfo}
            title="商品"
            dataIndex="product"
            width={400}
          />
          <Table.Column
            cell={renderOrderPrice}
            title="价格"
            dataIndex="price"
            width={120}
          />
          <Table.Column
            cell={renderOperation}
            title="操作"
            width={100}
          />
        </Table>
      </IceContainer>
    </div>
  );
}
