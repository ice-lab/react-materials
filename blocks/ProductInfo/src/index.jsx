import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import './index.modules.scss'

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
      <div className="product-info stylescontainer" >
        <Row wrap>
          {dataSource.map((item, index) => {
            return (
              <Col xxs="12" s="8" l="8" key={index} className="stylesitem">
                <img src={item.pic} className="stylespic" alt="" />
                <h3 className="stylestitle">{item.title}</h3>
                <p className="stylesdesc">{item.desc}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
