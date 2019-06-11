import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      name: '人物名',
      company: '就职公司/职务',
      description:
        '随着个人用户对于互联网内容获取的要求和口味越来越特别，怎样提供更加精准个性化的资讯订阅服务是提升用户体验的关键。但是本质上来说一般都是通过新闻源智能推荐这样的组合实现的',
      imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
    };
  });
};

export default class Testimonial extends Component {
  static displayName = 'Testimonial';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(3);
    return (
      <IceContainer>
        <div className={styles.items}>
          <Row gutter="20" wrap>
            {data.map((item, index) => {
              return (
                <Col xxs="24" s="8" l="8" key={index}>
                  <div className={styles.item}>
                    <p className={styles.description}>
                      “
                      {item.description}
                      ”
                    </p>
                    <div className={styles.infoBox}>
                      <img
                        className={styles.avatar}
                        src={item.imgUrl}
                        alt={item.name}
                      />
                      <div>
                        <h5 className={styles.name}>{item.name}</h5>
                        <p className={styles.company}>{item.company}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </IceContainer>
    );
  }
}

