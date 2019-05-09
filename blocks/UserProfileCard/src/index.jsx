/* eslint no-nested-ternary:0 */
import React, { Component } from 'react';
import { Icon, Grid } from '@alifd/next';
import Img from '@icedesign/img';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const data = [
  {
    isV: true,
    picUrl: require('./images/avatar.jpg'),
    nick: '靓靓胖大仙',
    tag: ['5月活跃服务方'],
    fansCount: '180302',
    priceList: [
      {
        fee: '500.00',
        subject: '短视频制作可投稿',
        cateName: '宝贝主图视频制作',
      },
      {
        fee: '500.00',
        subject: '短视频制作可投稿',
        cateName: '宝贝主图视频制作',
      },
    ],
    titleArray: [
      {
        name: '合作任务数',
        value: '6011',
      },
      {
        name: '任务完成率',
        value: '96%',
      },
      {
        name: '服务评分',
        value: '4.9',
      },
      {
        name: '垂直领域',
        value: '美搭',
      },
      {
        name: '制作方',
        value: '淘女郎',
      },
    ],
  },
];

export default class UserProfileCard extends Component {
  static displayName = 'UserProfileCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.anchorCardContent}>
        {data.map((item, idx) => {
          return (
            <Row wrap className={styles.anchorCard} key={idx}>
              <Col l="4">
                <a href="#" className={styles.anchorProfileInfo} target="_blank">
                  <div className={styles.maskLayer} />
                  <Img
                    width={160}
                    height={160}
                    src={item.picUrl}
                    type="cover"
                    className={styles.anchorAvatar}
                  />
                  <div className={styles.anchorInfoBody}>
                    <h3 className={styles.anchorName}>
                      {item.nick}
                      {item.isV && (
                        <img
                          src={require('./images/vflag.png')}
                          className={styles.anchorVflag}
                          alt=""
                        />
                      )}
                    </h3>
                    <div className={styles.anchorFans}>
                      <span className={styles.fansText}>粉丝</span>
                      <span className={styles.fansCount}>
                        {item.fansCount > 10000
                          ? `${Math.ceil(item.fansCount / 100) / 100}万`
                          : item.fansCount
                          ? item.fansCount
                          : 0}
                      </span>
                    </div>
                  </div>
                </a>
              </Col>

              <Col l="4">
                <ul className={styles.anchorBaseInfo}>
                  {item.titleArray &&
                    item.titleArray.length &&
                    item.titleArray.map((info, index) => {
                      return (
                        <li key={index} className={styles.infoItemBody}>
                          <span className={styles.infoItemLabel}>
                            {info.name}:{' '}
                          </span>
                          {info.logo && (
                            <img
                              src={info.logo}
                              alt=""
                              className={{
                                width: '18px',
                                height: '18px',
                                margin: '0 5px',
                                borderRadius: '12px',
                              }}
                            />
                          )}
                          <span className={styles.infoItemValue}>{info.value}</span>
                        </li>
                      );
                    })}

                  <div className={styles.infoItemTags}>
                    {item.tag &&
                      item.tag.map((tag, id) => {
                        return (
                          <span className={styles.infoItemTag} key={id}>
                            {tag.substr(0, 11)}
                          </span>
                        );
                      })}
                  </div>
                </ul>
              </Col>

              <Col l="15">
                <ul className={styles.anchorLiveInfo}>
                  {item.priceList.map((live, id) => {
                    return (
                      <li
                        className={styles.liveInfoItem}
                        key={id}
                        data-spm={`${this.props.cateType}-${item.userId}-${
                          live.skuId
                        }`}
                      >
                        <a
                          to={live.url}
                          className={styles.liveInfoItemLink}
                          target="_blank"
                        >
                          <span className={styles.infoItemType}>
                            宝贝主图视频制作
                          </span>
                          <span className={styles.infoItemLine} />
                          <span className={styles.infoItemTitle}>
                            {live.subject}
                          </span>
                          <span className={styles.infoItemPrice}>{live.fee}</span>
                          <Icon
                            type="arrow-right"
                            size="xs"
                            className={styles.customArrorRightIcon}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}


