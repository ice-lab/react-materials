import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import './index.modules.scss'

const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      name: '人物名',
      company: '就职公司/职务',
      description:
        '随着个人用户对于互联网内容获取的要求和口味越来越特别，怎样提供更加精准个性化的资讯订阅服务是提升用户体验的关键。虽然我们发现目前市面上有非常多的资讯类app 都标榜自己能够提供个人定制化的新闻阅读功能，但是本质上来说一般都是通过新闻源+兴趣点+智能推荐这样的组合实现的',
      imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
    };
  });
};

export default class TestimonialCard extends Component {
  static displayName = 'TestimonialCard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(3);
    return (
      <div className="stylescontainer">
        <div className="stylescontent">
          <Row wrap gutter={20}>
            {data.map((item, index) => {
              return (
                <Col xxs="24" s="8" l="8" key={index}>
                  <div className="stylesitem">
                    <div className="stylesinfoBox">
                      <img
                        className="stylesavatar"
                        src={item.imgUrl}
                        alt={item.name}
                      />
                      <div className="stylesbaseInfo">
                        <h5 className="stylesname">{item.name}</h5>
                        <p className="stylescompany">{item.company}</p>
                      </div>
                    </div>
                    <p className="stylesdescription">
                      “
                      {item.description}
                      ”
                    </p>
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

