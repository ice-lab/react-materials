import React, { Component } from 'react';
import styles from './index.module.scss';

export default class FooterLinks extends Component {
  static displayName = 'FooterLinks';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.footerBox}>
        <div className={styles.footerBoxContent}>
          <div className={styles.footerClearfix} />
          <div className={styles.footerBoxLeft}>
            <ul
              className={styles.footerBoxContentUl}
            >
              <li
                className={styles.footerBoxContentLi}
              >
                <div
                  className={styles.footerBoxContentItem}
                >
                  <div
                    className={styles.footerBoxContentName}
                  >
                    新手入门
                  </div>
                  <div className="footer-box-content-subitem">
                    <ul>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          新手指南
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          热门FAQ
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          合作攻略
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          平台规则
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className={styles.footerBoxContentLi}
              >
                <div
                  className={styles.footerBoxContentItem}
                >
                  <div
                    className={styles.footerBoxContentName}
                  >
                    服务支持
                  </div>
                  <div className="footer-box-content-subitem">
                    <ul>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          开发文档
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          业务文档
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          物料模板下载
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          蚂蚁开放日
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                className={styles.footerBoxContentLi}
              >
                <div
                  className={styles.footerBoxContentItem}
                >
                  <div
                    className={styles.footerBoxContentName}
                  >
                    客服帮助
                  </div>
                  <div className="footer-box-content-subitem">
                    <ul>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          技术支持中心
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          在线问答
                        </a>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <span>客服：0571-88158090</span>
                      </li>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <span>（9:00-22:00）</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className={styles.footerBoxContentLi}
              >
                <div
                  className={styles.footerBoxContentItem}
                >
                  <div
                    className={styles.footerBoxContentName}
                  >
                    合作洽谈
                  </div>
                  <div className="footer-box-content-subitem">
                    <ul>
                      <li
                        className={styles.footerBoxContentSubli}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className={styles.footerBoxContentItemLink}
                        >
                          点此与我联系
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.footerClearfix} />
            </ul>
          </div>
          <div className={styles.footerBoxRight}>
            <div
              className={styles.footerBoxRightTitle}
            >
              关注我们
            </div>
            <div
              className={styles.footerBoxRightItemOpacity}
            >
              关注开放平台生活号
            </div>
            <div
              className={styles.footerBoxRightItem}
            >
              <img
                className={styles.footerBoxRightItemImg}
                src={require('./images/HNblwDvJYEuHnbIvlhVy.png')}
                alt=""
              />
            </div>
            <div className={styles.footerBoxRightItemOpacity}>
              打开支付宝扫一扫
            </div>
          </div>
          <div className={styles.footerClearfix} />
        </div>
      </div>
    );
  }
}

