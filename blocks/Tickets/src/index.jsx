import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import MOCK_DATA from './data';
import './index.modules.scss'

const { Row, Col } = Grid;
const ScrollOverPack = ScrollAnim.OverPack;

export default class Tickets extends Component {
  static displayName = 'Tickets';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="stylescontainer">
        <ScrollOverPack always={false}>
          <QueueAnim type="bottom" delay={100} duration={1000}>
            <div className="stylescontent" key="content">
              <div className="stylesmainTitle">TICKETS</div>
              <div className="stylesmainDesc">参会门票一览</div>
              <div className="stylestipsList">
                <p className="stylestipsText">
                  团队折扣：单笔购买任意票种累计5张及以上，总价
                  <span className="stylestipsNum">9</span>
                  折；10张及以上，总价
                  <span className="stylestipsNum">8</span>折
                </p>
                <p className="stylestipsText">
                  售票截止日期：
                  <span className="stylestipsNum"> 9.14</span>
                </p>
                <p className="stylestipsText">* 各类门票限量发售，售完即止</p>
                <p className="stylestipsText">
                  门票相关权益速览：【两场主论坛】聆听数字化未来新起点、【
                  <a href="#" className="stylestipsLink">
                    <b> ATEC大会</b>
                  </a>
                  】见证科技金融普惠价值、【
                  <a href="#" className="stylestipsLink">
                    <b>百余场峰会及分论坛</b>
                  </a>
                  】洞见行业与技术新火花、【体验式展览】置身数字科技人文的和谐未来、【
                  <a href="#" className="stylestipsLink">
                    <b>虾米音乐节</b>
                  </a>
                  】享受艺术与技术交融的感官盛宴
                </p>
              </div>
              <Row wrap gutter={20}>
                {MOCK_DATA.map((item, index) => {
                  return (
                    <Col l="6" key={index}>
                      <div className="stylesitemBox">
                        <div className="stylesitemTitle">{item.title}</div>
                        <div className="stylesitemTime">
                          {item.time}
                          DAYS
                        </div>
                        <ul className="stylesitemTextList">
                          {item.desc.map((value, key) => {
                            return (
                              <li key={key} className="stylestextList">
                                {value}
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="stylesitemPriceList">
                          <li className="stylespriceList">
                            <div className="stylespriceText">
                              ￥ <span className="stylesprice">{item.price}</span>{' '}
                              /张
                            </div>
                          </li>
                        </ul>
                        <div className="stylesbtnWrap">
                          <a
                            href="#"
                            className={item.issale?"stylesbuyLink":"saleStyle"}
                          >
                            已售罄
                          </a>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </QueueAnim>
        </ScrollOverPack>
      </div>
    );
  }
}

