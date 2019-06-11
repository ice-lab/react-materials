import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

const data = [
  {
    title: '基本配置',
    price: '99',
    type: '微型企业',
    description:
      '海纳百川，精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
    imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
  },
  {
    title: '标准配置',
    price: '199',
    type: '中小企业',
    description:
      '海纳百川，精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
    imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
  },
  {
    title: '高端配置',
    price: '299',
    type: '大型企业',
    description:
      '海纳百川，精选全球的高品质软件与服务，大咖云集，知识分享的开发者技术社区',
    imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
  },
];

export default class PriceInfo extends Component {
  static displayName = 'PriceInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Row gutter="20" wrap>
          {data.map((item, index) => {
            return (
              <Col xxs="24" s="8" l="8" key={index}>
                <div className={styles.item}>
                  <div className={styles.head}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.price}>￥{item.price}</p>
                  </div>
                  <div className={styles.info}>
                    <img className={styles.image} src={item.imgUrl} alt="" />
                    <h5 className={styles.type}>{item.type}</h5>
                    <p className={styles.description}>{item.description}</p>
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
    );
  }
}
