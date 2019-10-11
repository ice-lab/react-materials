import React from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Grid } from '@alifd/next';
import SingleItem from './SingleItem';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
];

export default function PictureTextList() {
  const renderItem = (item, index) => {
    return (
      <Col xxs={12} s={8} m={6} l={4} key={index}>
        <SingleItem {...item} />
      </Col>
    );
  };

  return (
    <div>
      <IceContainer className={styles.card}>
        <Row wrap gutter={20}>
          {dataSource.map(renderItem)}
        </Row>
        <div className={styles.paginationContainer}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}
