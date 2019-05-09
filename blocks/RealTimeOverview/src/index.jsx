import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class RealTimeOverview extends Component {
  static displayName = 'RealTimeOverview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer title="实时概况">
        <Row wrap>
          <Col l="12" xxs="24">
            <div className="stylesdataItem">
              <img
                src={require('./images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png')}
                alt=""
                className="stylesdataItemImg"
              />
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">门店销售额(元)</div>
                <div className="stylesunitAmount">1982.00</div>
                <div className="stylesunitFooter">昨日：1680.00</div>
              </div>
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">门店支付订单数</div>
                <div className="stylesunitAmount">80</div>
                <div className="stylesunitFooter">昨日：60</div>
              </div>
            </div>
          </Col>
          <Col l="12" xxs="24">
            <div className="stylesdataItem">
              <img
                src={require('./images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png')}
                alt=""
                className="stylesdataItemImg"
              />
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">网店销售额(元)</div>
                <div className="stylesunitAmount">2381.00</div>
                <div className="stylesunitFooter">昨日：2123.00</div>
              </div>
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">网店支付订单数</div>
                <div className="stylesunitAmount">120</div>
                <div className="stylesunitFooter">昨日：128</div>
              </div>
            </div>
          </Col>
          <Col l="12" xxs="24">
            <div className="stylesdataItem">
              <img
                src={require('./images/TB1Py4_ceuSBuNjy1XcXXcYjFXa-142-140.png')}
                alt=""
                className="stylesdataItemImg"
              />
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">新增客户数</div>
                <div className="stylesunitAmount">182</div>
                <div className="stylesunitFooter">昨日：123</div>
              </div>
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">支付客户数</div>
                <div className="stylesunitAmount">96</div>
                <div className="stylesunitFooter">昨日：90</div>
              </div>
            </div>
          </Col>
          <Col l="12" xxs="24">
            <div className="stylesdataItem">
              <img
                src={require('./images/TB1Ni4_ceuSBuNjy1XcXXcYjFXa-142-140.png')}
                alt=""
                className="stylesdataItemImg"
              />
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">新增会员数</div>
                <div className="stylesunitAmount">89</div>
                <div className="stylesunitFooter">昨日：78</div>
              </div>
              <div className="stylesdataItemUnit">
                <div className="stylesunitTitle">新增储值金额(元)</div>
                <div className="stylesunitAmount">568.00</div>
                <div className="stylesunitFooter">昨日：693.00</div>
              </div>
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

