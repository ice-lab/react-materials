import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      imgUrl: require('./images/TB1rnNcjr_I8KJjy1XaXXbsxpXa-603-474.png'),
    };
  });
};

export default class BrandShowCase extends Component {
  static displayName = 'BrandShowCase';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(12);
    return (
      <div className="brand-show-case" className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>品牌展示</h2>
          <p className={styles.intro}>
            广义的“品牌”是具有经济价值的无形资产，用抽象化的、特有的、能识别的心智概念来表现其差异性，从而在人们的意识当中占据一定位置的综合反映。品牌建设具有长期性
          </p>
        </div>
        <Row gutter="20" wrap className={styles.items}>
          {data.map((item, index) => {
            return (
              <Col xxs="12" s="4" l="4" key={index}>
                <div className={styles.item}>
                  <img src={item.imgUrl} className={styles.image} alt="" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}