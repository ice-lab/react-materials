import React from 'react';
import { Button, Search, Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
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

export default function FilterList() {
  const renderItems = () => {
    return (
      <Row gutter="20" wrap className={styles.itemRow}>
        {dataSource.map((item, index) => {
          return (
            <Col key={index} xxs="24" s="8" l="4">
              <SingleItem key={index} {...item} />
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <div className={styles.filterList}>
      <IceContainer
        className={styles.hb1}
      >
        <div className={styles.filterCategories}>
          <div className={styles.selectItem}>
            我的商品
          </div>
          <div className={styles.selectItem}>
            我的图片
          </div>
          <div className={styles.selectItem}>
            我的视频
          </div>
        </div>

        <div className={styles.searchWrapper}>
          <Search
            placeholder="标题"
            inputWidth={120}
            searchText=""
            className={styles.searchInput}
          />
          <Button type="primary">搜索</Button>
        </div>

        <div className={styles.filterCategory}>
          <Button className={styles.selectBtn}>
            全部商品
          </Button>
          <Button className={styles.selectBtn}>
            未分类
          </Button>
          <Button className={styles.selectBtn}>
            已失效
          </Button>
          <Button className={styles.selectBtn}>
            有好货专用
          </Button>
          <Button className={styles.selectBtn}>
            必买清单
          </Button>
          <span />
        </div>
      </IceContainer>

      <IceContainer className={styles.hb2}>
        {renderItems()}
      </IceContainer>
    </div>
  );
}
