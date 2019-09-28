import React from 'react';
import styles from './index.module.scss';

export default function CardItems() {
  return (
    <div className={styles.hyThirdPartyWrapper}>
      <div className={styles.hyThirdParty}>
        <h3 className={styles.hyThirdPartyTitle}>
          第三方服务推荐
          <a className={styles.thirdPartyMore} href="#">
            查看更多服务
          </a>
        </h3>

        <div className={styles.thirdPartyDetails}>
          <div className={styles.thirdPartyDetail}>
            <div
              className={`${styles.thirdPartyDetailItem} ${styles.thirdPartyDetailItemFirst}`}
            >
              <img
                className={styles.thirdPartyDetailImg}
                src={require('./images/geocpIkIixaGovHECTdw.svg')}
                alt=""
              />
              <h5 className={styles.thirdPartyName}>付呗物业</h5>
              <p className={styles.thirdPartySold}>
                已售：
                <span className={styles.thirdPartySoldNumber}>474</span>
              </p>
              <p className={styles.thirdPartyDesc}>
                解决社区物业缴费中遇到的难题，实现物业线上缴费，公告触达，服务线上申请，财务分析，提供独立的互联网+社区平台
              </p>
              <a className={styles.thirdPartyLink} href="#">
                免费接入
              </a>
            </div>

            <div className={styles.thirdPartyDetailItem}>
              <img
                className={styles.thirdPartyDetailImg}
                src={require('./images/kMXuMYkLTCSkTnzoiRxs.png')}
                alt=""
              />
              <h5 className={styles.thirdPartyName}>邻易联</h5>
              <p className={styles.thirdPartySold}>
                已售：
                <span className={styles.thirdPartySoldNumber}>206</span>
              </p>
              <p className={styles.thirdPartyDesc}>
                为物业公司提供智慧管理平台，帮助物业提升缴费率，有效解决物业“成本高、服务难改善、盈利渠道少”等难题
              </p>
              <a className={styles.thirdPartyLink} href="#">
                免费接入
              </a>
            </div>

            <div className={styles.thirdPartyDetailItem}>
              <img
                className={styles.thirdPartyDetailImg}
                src={require('./images/TpqeamkGvHuXSWKsLOth.png')}
                alt=""
              />
              <h5 className={styles.thirdPartyName}>云筑社区综合管理平台</h5>
              <p className={styles.thirdPartySold}>
                已售：
                <span className={styles.thirdPartySoldNumber}>287</span>
              </p>
              <p className={styles.thirdPartyDesc}>
                基于互联网、物联网、大数据、云计算的物业管理平台，轻松接入，免安装维护
              </p>
              <a className={styles.thirdPartyLink} href="#">
                免费接入
              </a>
            </div>

            <div
              className={`${styles.thirdPartyDetailItem} ${styles.thirdPartyDetailItemLast}`}
            >
              <img
                className={styles.thirdPartyDetailImg}
                src={require('./images/ykkPpNnSjuqpqBhxjTir.png')}
                alt=""
              />
              <h5 className={styles.thirdPartyName}>橙子生活</h5>
              <p className={styles.thirdPartySold}>
                已售：
                <span className={styles.thirdPartySoldNumber}>5</span>
              </p>
              <p className={styles.thirdPartyDesc}>
                助力物业转型升级，轻松实现线上缴费，公告触达，报修响应。解决物业收费难、服务感知度低、收入来源单一等难题
              </p>
              <a className={styles.thirdPartyLink} href="#">
                免费接入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
