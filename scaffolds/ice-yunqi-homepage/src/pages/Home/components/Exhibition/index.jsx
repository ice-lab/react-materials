import React, { useState } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

const MOCK_DATA = [
  {
    title: 'Starry Galaxy 群星璀璨',
    desc:
      '技术突破疆域和引力限制，展现科技驱动下社会生活的繁荣生态全景，铁甲大战、品牌行星、舞台Battle，将云栖最会玩的创新精神贯彻到展览全程的每分每秒。',
    image: require('./images/slider1.png'),
  },
  {
    title: 'ATEC 金融科技',
    desc:
      '阿里巴巴集结地表最强黑科技，通过达摩院为核心，带动人工智能、IoT、生物识别等各大区块，以立足现在、眺望未来的方式，打造体验、沉浸、交互互相融合的震撼空间。',
    image: require('./images/slider2.png'),
  },
  {
    title: 'Space Station 空间站',
    desc:
      '共创新金融的集结号已经吹响！集中呈现如何将Techfin技术应用于医疗、农业、教育等领域，与合作伙伴一起探索如何推动社会的平等与可持续发展。更有工程师现场互动，手把手教你如何开发。',
    image: require('./images/slider2.png'),
  },
];

export default function Exhibition() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onMouseEnter = (event) => {
    const index = parseInt(event.currentTarget.dataset.index, 10);
    if (!isNaN(index)) {
      setSelectedIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      <ScrollOverPack always={false}>
        <QueueAnim type="bottom" delay={100} duration={1000}>
          <div className={styles.content} key="content">
            <div className={styles.mainTitle}>EXHIBITION</div>
            <div className={styles.mainDesc}>创新互动展览</div>
            <div className={styles.items}>
              {MOCK_DATA.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <a
                    href="#"
                    key={index}
                    className={`${styles.item}${isSelected ? ` ${styles.selected}` : ''}`}
                    data-index={index}
                    onMouseEnter={onMouseEnter}
                  >
                    <img
                      className={`${styles.image}${isSelected ? ` ${styles.selectedImage}` : ''}`}
                      src={item.image}
                      alt=""
                    />
                    <h4
                      className={`${styles.title}${isSelected ? ` ${styles.selectedTitle}` : ''}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`${styles.desc}${isSelected ? ` ${styles.selectedDesc}` : ''}`}
                    >
                      {item.desc}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  );
}
