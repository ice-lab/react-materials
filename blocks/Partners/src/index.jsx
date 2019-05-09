import React, { Component } from 'react';
import { Grid } from '@alifd/next';

import './index.modules.scss'
import MOCK_DATA from './data';

const { Row, Col } = Grid;

export default class Partners extends Component {
  static displayName = 'Partners';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="stylescontainer">
        <div className="stylescontent">
          <div className="stylesbigTitle">PARTNERS</div>
          <div className="stylessubTitle">合作伙伴</div>
          <div className="stylespartnerBox">
            {MOCK_DATA.map((item, index) => {
              return (
                <div className="stylespartnerItem" key={index}>
                  <div className="stylespartnerTitle">{item.title}</div>
                  <Row wrap gutter={20}>
                    {item.partners.map((src, key) => {
                      return (
                        <Col l="4" key={key}>
                          <img src={src} alt="" className="styleslogo" />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
