import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <ScrollOverPack>
        <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
          <div key="summary" className={styles.summary}>
            <div className={styles.num}>01_</div>
            <div className={styles.title}>About</div>
            <div className={styles.subtitle}>关于极客派</div>
          </div>
          <div
            key="introOne"
            className={styles.introOne}
          >
            <div className={styles.itemTitle}>新大陆的登月者</div>
            <div className={styles.itemDesc}>
              “极客”曾指性格古怪的人，或是“电脑嬉皮士”的代名词。但如今，我们更喜欢用来形容那些信仰技术与创新的力量的群体。这些新大陆的登月者，天生热爱探索和创造，特立独行；生活、工作中他们推崇化繁为简，相信技术的力量并追求创新美学。
            </div>
          </div>
          <div
            key="introTwo"
            className={styles.introTwo}
          >
            <div className={styles.itemTitle}>手举好奇火把的探路者</div>
            <div className={styles.itemDesc}>
              YunQi GeekPai
              将举行四天开发者大赛以及极客体验区。4天，机器人格斗、GXIC2018
              、区块链5场大赛，10场动手工作坊，100万奖金池，汇聚最geek的开发者；特设极客工作坊，
              super coder 83行代码，坦克算法大赛等活动，开启极客之旅
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
);
