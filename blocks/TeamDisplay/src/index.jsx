import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import './index.modules.scss'

const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map((item, index) => {
    return {
      name: `成员${index + 1}`,
      description: '成员的相关描述',
      imgUrl: require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png'),
    };
  });
};

export default class TeamDisplay extends Component {
  static displayName = 'TeamDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(6);
    return (
      <div className="team-display stylescontainer">
        <h2 className="stylestitle">我们的团队</h2>
        <Row wrap>
          {data.map((item, index) => {
            return (
              <Col xxs="12" s="8" l="8" key={index}>
                <div>
                  <img
                    src={item.imgUrl}
                    className="stylesavatar"
                    alt={item.name}
                  />
                  <h5 className="stylesname">{item.name}</h5>
                  <p className="stylesdescription">{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
