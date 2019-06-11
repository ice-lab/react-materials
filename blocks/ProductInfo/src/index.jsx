import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '主页背书',
    pic: require('./images/TB1i7OMif6H8KJjSspmXXb2WXXa-210-210.png'),
    desc: '这里填写具体的细节描述',
  },
  {
    title: '频道入驻',
    pic: require('./images/TB1wA5KinvI8KJjSspjXXcgjXXa-210-210.png'),
    desc: '这里填写具体的细节描述',
  },
  {
    title: '商业扶持',
    pic: require('./images/TB1laelicjI8KJjSsppXXXbyVXa-210-210.png'),
    desc: '这里填写具体的细节描述',
  },
  {
    title: '专属管家',
    pic: require('./images/TB1EfLYfOqAXuNjy1XdXXaYcVXa-207-210.png'),
    desc: '这里填写具体的细节描述',
  },
  {
    title: '资源优选',
    pic: require('./images/TB1a31mignH8KJjSspcXXb3QFXa-210-210.png'),
    desc: '这里填写具体的细节描述',
  },
  {
    title: '快捷搜索',
    pic: require('./images/TB1ALecicrI8KJjy0FhXXbfnpXa-210-210.png'),
    desc: '这里填写具体的细节描述',
  },
];

export default class ProductInfo extends Component {
  static displayName = 'ProductInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container} >
        <Row wrap>
          {dataSource.map((item, index) => {
            return (
              <Col xxs="12" s="8" l="8" key={index} className={styles.item}>
                <img src={item.pic} className={styles.pic} alt="" />
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
