import React from 'react';
import styles from './index.module.scss';

export default function FooterLinks() {
  return (
    <div className={styles.footerBox}>
      <div className={styles.footerBoxContent}>
        <div className={styles.footerClearfix} />
        <div className={styles.footerBoxLeft}>
          <ul className={styles.footerBoxContentUl}>
            <li className={styles.footerBoxContentLi}>
              <div className={styles.footerBoxContentItem}>
                <div className={styles.footerBoxContentName}>新手入门</div>
                <div>
                  <ul>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        新手指南
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        热门FAQ
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        合作攻略
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        平台规则
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.footerBoxContentLi}>
              <div className={styles.footerBoxContentItem}>
                <div className={styles.footerBoxContentName}>服务支持</div>
                <div>
                  <ul>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        开发文档
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        业务文档
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        物料模板下载
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        开放日
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={styles.footerBoxContentLi}>
              <div className={styles.footerBoxContentItem}>
                <div className={styles.footerBoxContentName}>客服帮助</div>
                <div>
                  <ul>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        技术支持中心
                      </a>
                    </li>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
                        在线问答
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.footerBoxContentLi}>
              <div className={styles.footerBoxContentItem}>
                <div className={styles.footerBoxContentName}>合作洽谈</div>
                <div>
                  <ul>
                    <li className={styles.footerBoxContentSubli}>
                      <a href="#" className={styles.footerBoxContentItemLink}>
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
          <div className={styles.footerBoxRightTitle}>关注我们</div>
          <div
            className={`${styles.footerBoxRightItem} ${styles.footerBoxRightItemOpacity}`}
          >
            加入钉钉群
          </div>
          <div className={styles.footerBoxRightItem}>
            <img
              className={styles.footerBoxRightItemImg}
              src={require('./images/TB1J2tnuKSSBuNjy0FlXXbBpVXa-1060-1086.png')}
              alt=""
            />
          </div>
          <div
            className={`${styles.footerBoxRightItem} ${styles.footerBoxRightItemOpacity}`}
          >
            打开钉钉扫一扫
          </div>
        </div>
        <div className={styles.footerClearfix} />
      </div>
    </div>
  );
}
