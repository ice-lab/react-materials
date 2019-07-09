import React, { useState, useEffect } from 'react';
import Img from '@icedesign/img';
import { Grid } from '@alifd/next';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '飞利浦',
    subject:
      '一场内容营销活动获得超百万的进店点击，定位新广告的达人+积极迎接内容时代的品牌，如何刷新内容营销的定义？',
    headPic: require('./images/TB1QMwlSXXXXXaUXXXXXXXXXXXX-122-122.png'),
    pic: require('./images/TB1n6H_SXXXXXc3XpXXXXXXXXXX-616-348.png'),
    url: 'https://alibaba.github.io/ice',
  },
  {
    title: '万家乐',
    subject:
      '策划『生活改造家』主题全案，联合一线大咖制作图文、直播、短视频全域引流，助力品牌升级和高端人群种草，结合行业活动割草。',
    headPic: require('./images/TB1Z4CLSXXXXXcHXVXXXXXXXXXX-61-61.png'),
    pic: require('./images/TB1bHO6SXXXXXaiXFXXXXXXXXXX-308-174.png'),
    url: 'https://alibaba.github.io/ice',
  },
  {
    title: '职场游乐园',
    subject: '2017年以“职场游乐园”为主题，全方位推动Lee牛仔专家与创新者形象。',
    headPic: require('./images/TB1kX62SXXXXXXJXVXXXXXXXXXX-122-122.png'),
    pic: require('./images/TB17bzrSXXXXXbpaFXXXXXXXXXX-616-348.png'),
    url: 'https://alibaba.github.io/ice',
  },
  {
    title: '品味百味人生',
    subject:
      '吃货的世界你不懂，看着直播镜头里心仪的零食恨不得舔屏，从种草到剁手分分钟一气呵成。',
    headPic: require('./images/TB19C_9SXXXXXc1XpXXXXXXXXXX-122-122.png'),
    pic: require('./images/TB1IkEjSXXXXXb1XXXXXXXXXXXX-616-348.png'),
    url: 'https://alibaba.github.io/ice',
  },
];

export default function BrandDisplay() {
  const [isMobile, setMobile] = useState(false);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const logoWidth = isMobile ? 150 : 195;
  const logoHeight = isMobile ? 150 : 175;

  return (
    <div className={styles.container}>
      <div className={styles.brandHeader}>
        <h5 className={styles.brandTitle}>品牌展示</h5>
      </div>
      <Row gutter="20" wrap>
        {dataSource.map((item, index) => {
          return (
            <Col xxs="24" s="12" l="12" key={index} className={styles.brandItem}>
              <a href={item.url} className={styles.brandItemContent}>
                <div>
                  <Img
                    width={logoWidth}
                    height={logoHeight}
                    src={item.pic}
                    type="cover"
                    alt="图片"
                  />
                </div>
                <div className={styles.caseContent}>
                  <div className={styles.caseSubject}>
                    <img
                      src={item.headPic}
                      className={styles.subjectImage}
                      alt="图片"
                    />
                    <span className={styles.subjectDesc}>{item.title}</span>
                  </div>
                  <p className={styles.caseDetail}>{item.subject}</p>
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
