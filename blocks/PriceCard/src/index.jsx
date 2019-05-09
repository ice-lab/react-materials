import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import './index.modules.scss'
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

export default class PriceCard extends Component {
  static displayName = 'PriceCard';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="stylescontainer">
        <div className="stylescontent">
          <Row gutter="20" wrap>
            {data.map((item, index) => {
              return (
                <Col xxs="24" s="8" l="8" key={index}>
                  <div className="stylesitem">
                    <div className="styleshead">
                      <h3 className="stylestitle">{item.title}</h3>
                      <p className="stylesdescription">{item.description}</p>
                    </div>
                    <div className="stylesinfo">
                      <p className="stylesprice">￥{item.price}</p>
                    </div>
                    <div className="stylesbuyBtn">
                      <a href="/" className="styleslink">
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
}

