import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const dataSource = [
  {
    text: '昨日内容浏览次数',
    number: '46,657',
    circle: {
      width: 36,
      height: 31,
      icon: require('./images/TB1YDjNh4rI8KJjy0FpXXb5hVXa-36-31.png'),
    },
    helpURL: 'http://taobao.com',
  },
  {
    text: '昨日主页浏览人数',
    number: '96',
    circle: {
      width: 40,
      height: 43,
      icon: require('./images/TB1Vzv5h2DH8KJjy1XcXXcpdXXa-40-43.png'),
    },
    helpURL: 'http://taobao.com',
  },
  {
    text: '昨日粉丝数',
    number: '157',
    circle: {
      width: 42,
      height: 29,
      icon: require('./images/TB1uB_Fh9_I8KJjy0FoXXaFnVXa-42-29.png'),
    },
    helpURL: 'http://taobao.com',
  },
  {
    text: '昨日活跃粉丝数',
    number: '42',
    circle: {
      width: 43,
      height: 42,
      icon: require('./images/TB186kphZLJ8KJjy0FnXXcFDpXa-43-42.png'),
    },
    helpURL: 'http://taobao.com',
  },
];

export default class StatisticalCard extends Component {
  static displayName = 'StatisticalCard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = () => {
    return dataSource.map((data, idx) => {
      const imgStyle = {
        width: `${data.circle.width}px`,
        height: `${data.circle.height}px`,
      };
      return (
        <Col
          xxs={24}
          xs={12}
          l={6}
          key={idx}
          className={styles.statisticalCardItem}
        >
          <div className={styles.circleWrap}>
            <img src={data.circle.icon} style={imgStyle} alt="图片" />
          </div>
          <div className={styles.statisticalCardDesc}>
            <div className={styles.statisticalCardText}>
              {data.text}
              <a href={data.helpURL} target="_blank">
                <img
                  src={require('./images/TB1uR_Fh9_I8KJjy0FoXXaFnVXa-12-12.png')}
                  className={styles.itemHelp}
                  alt="图片"
                />
              </a>
            </div>
            <div className={styles.statisticalCardNumber}>{data.number}</div>
          </div>
        </Col>
      );
    });
  };

  render() {
    return (
      <div className={`${styles.statisticalCard} statistical-card`}>
        <IceContainer className={styles.statisticalCardItems}>
          <Row wrap className={styles.newWrap}>
            {this.renderItem()}
          </Row>
        </IceContainer>
      </div>
    );
  }
}

