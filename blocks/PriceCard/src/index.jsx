import React from 'react';
import { Grid } from '@alifd/next';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

const data = [
  {
    title: '基本配置',
    price: '99',
    description:
      '海纳百川精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
  },
  {
    title: '标准配置',
    price: '199',
    description:
      '海纳百川精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
  },
  {
    title: '高端配置',
    price: '299',
    description:
      '海纳百川精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
  },
];

export default function PriceCard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row gutter="20" wrap>
          {data.map((item, index) => {
            return (
              <Col xxs="24" s="8" l="8" key={index}>
                <div className={styles.item}>
                  <div className={styles.head}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                  <div className={styles.info}>
                    <p className={styles.price}>￥{item.price}</p>
                  </div>
                  <div className={styles.buyBtn}>
                    <a href="/" className={styles.link}>
                      立即购买
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
