import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row wrap>
          <Col l="18">
            <p className={styles.title}>关于云栖大会</p>
            <p className={styles.desc}>
              关于云栖－云栖大会是由阿里巴巴集团主办的全球顶级科技大会，汇聚时代最强大脑，描绘新技术发展趋势和蓝图，展现云计算、大数据、人工智能等蓬勃发展的科技生态全景。从2015年到2017年，云栖大会系列活动已经累计吸引超过十万人现场参与，数千万人在线参与。2018年云栖大会将在深圳（
              <a href="#" className={styles.link}>
                <b>精彩回顾</b>
              </a>
              ）、南京（
              <a href="#" className={styles.link}>
                <b>精彩回顾</b>
              </a>
              ）、上海（
              <a href="#" className={styles.link}>
                <b>精彩回顾</b>
              </a>
              ）、武汉（
              <a href="#" className={styles.link}>
                <b>精彩回顾</b>
              </a>
              ）、重庆（
              <a href="#" className={styles.link}>
                <b>8.24同步直播中</b>
              </a>
              ）、杭州（
              <a href="#" className={styles.link}>
                <b>9.19-9.22，立即抢购</b>
              </a>
              ）、广州、北京等地陆续举办，邀您一起驱动数字中国。
            </p>
          </Col>
          <Col l="6">
            <div className={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                className={styles.qrcode}
              />
              <div className={styles.textBox}>
                <p className={styles.subtit}>下载 App</p>
                <p className={styles.text}>
                  随时了解最新大会议程获取大会温馨提醒和参会二维码
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
