import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';


const { Row, Col } = Grid;

const data = [
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1jPyNrWmWBuNjy1XaXXXCbXXa-300-380.png',
    name: '马云',
    job: '阿里巴巴集团董事局主席',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1Wo6Kr9BYBeNjy0FeXXbnmFXa-300-380.png',
    name: '张建锋',
    job: '阿里巴巴集团CTO',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1Zo6Kr9BYBeNjy0FeXXbnmFXa-300-380.png',
    name: '胡晓明',
    job: '阿里云总裁',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1WyaDr7OWBuNjSsppXXXPgpXa-300-380.png',
    name: 'Gerry Pennell',
    job: '国际奥委会首席信息技术官',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1obZNtf9TBuNjy0FcXXbeiFXa-600-760.png',
    name: '潘建伟',
    job: '中国科学院院士',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1118BtuSSBuNjy0FlXXbBpVXa-600-760.png',
    name: '王坚',
    job: '阿里巴巴集团技术委员会主席',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1fAxRtuuSBuNjy1XcXXcYjFXa-600-760.png',
    name: 'ULF Michael Widenius',
    job: 'MySQL & MariaDB 创始人',
  },
  {
    avatar:
      'https://img.alicdn.com/tfs/TB1GlbptDtYBeNjy1XdXXXXyVXa-600-760.png',
    name: '浅雪',
    job: '阿里巴巴人工智能实验室总经理',
  },
];

export default class Speakers extends Component {
  static displayName = 'Speakers';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainTitle}>SPEAKERS</div>
          <div className={styles.mainDesc}>精彩演讲回顾</div>
          <Row wrap gutter="20" className={styles.row}>
            {data.map((item, index) => {
              return (
                <Col l="6" key={index}>
                  <div className={styles.item}>
                    <img src={item.avatar} alt="" className={styles.avatar} />
                    <div className={styles.mask} />
                    <div className={styles.line} />
                    <div className={styles.info}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.job}>{item.job}</div>
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
}

