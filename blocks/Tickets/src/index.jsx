import React from 'react';
import { Grid } from '@alifd/next';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import MOCK_DATA from './data';
import styles from  './index.module.scss';

const { Row, Col } = Grid;
const ScrollOverPack = ScrollAnim.OverPack;

export default function Tickets() {
  return (
    <div className={styles.container}>
      <ScrollOverPack always={false}>
        <QueueAnim type="bottom" delay={100} duration={1000}>
          <div className={styles.content} key="content">
            <div className={styles.mainTitle}>TICKETS</div>
            <div className={styles.mainDesc}>参会门票一览</div>
            <div className={styles.tipsList}>
              <p className={styles.tipsText}>
                团队折扣：单笔购买任意票种累计5张及以上，总价
                <span className={styles.tipsNum}>9</span>
                折；10张及以上，总价
                <span className={styles.tipsNum}>8</span>折
              </p>
              <p className={styles.tipsText}>
                售票截止日期：
                <span className={styles.tipsNum}> 9.14</span>
              </p>
              <p className={styles.tipsText}>* 各类门票限量发售，售完即止</p>
              <p className={styles.tipsText}>
                门票相关权益速览：【两场主论坛】聆听数字化未来新起点、【
                <a href="#" className={styles.tipsLink}>
                  <b> ATEC大会</b>
                </a>
                】见证科技金融普惠价值、【
                <a href="#" className={styles.tipsLink}>
                  <b>百余场峰会及分论坛</b>
                </a>
                】洞见行业与技术新火花、【体验式展览】置身数字科技人文的和谐未来、【
                <a href="#" className={styles.tipsLink}>
                  <b>虾米音乐节</b>
                </a>
                】享受艺术与技术交融的感官盛宴
              </p>
            </div>
            <Row wrap gutter={20}>
              {MOCK_DATA.map((item, index) => {
                return (
                  <Col l="6" key={index}>
                    <div className={styles.itemBox}>
                      <div className={styles.itemTitle}>{item.title}</div>
                      <div className={styles.itemTime}>
                        {item.time}
                        DAYS
                      </div>
                      <ul className={styles.itemTextList}>
                        {item.desc.map((value, key) => {
                          return (
                            <li key={key} className={styles.textList}>
                              {value}
                            </li>
                          );
                        })}
                      </ul>
                      <ul className={styles.itemPriceList}>
                        <li className={styles.priceList}>
                          <div className={styles.priceText}>
                            ￥ <span className={styles.price}>{item.price}</span>{' '}
                            /张
                          </div>
                        </li>
                      </ul>
                      <div className={styles.btnWrap}>
                        <a
                          href="#"
                          className={item.issale ? styles.buyLink : styles.saleStyle}
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
