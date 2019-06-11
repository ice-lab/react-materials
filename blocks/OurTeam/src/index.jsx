import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map((item, index) => {
    return {
      name: `成员${index + 1}`,
      description: '成员的相关简介和描述',
      imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
    };
  });
};

export default class OurTeam extends Component {
  static displayName = 'OurTeam';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(4);
    return (
      <div className={`${styles.container} our-team `}   >
        <div className={styles.head}>
          <h2 className={styles.title}>我们的团队</h2>
          <p className={styles.intro}>
            我们是一支充满激情、志向远大、怀揣梦想<br />的团队，也是一个思维活跃、朝气蓬勃、团结互助的大家庭。
          </p>
        </div>
        <Row wrap className={styles.items}>
          {data.map((item, index) => {
            return (
              <Col xxs="24" s="12" l="12" className={styles.item} key={index}>
                <img src={item.imgUrl} className={styles.avatar} alt="" />
                <div className={styles.baseInfo}>
                  <h5 className={styles.name}>{item.name}</h5>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}


