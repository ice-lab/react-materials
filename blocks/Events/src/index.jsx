import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

export default function Events() {
  return (
    <div className={styles.container}>
      <ScrollOverPack always={false}>
        <QueueAnim type="bottom" delay={100} duration={1000}>
          <div className={styles.content} key="content">
            <div className={styles.summary}>
              <div className={styles.mainTitle}>EVENTS</div>
              <div className={styles.mainDesc}>创新活动</div>
            </div>
            <div className={styles.items}>
              <div className={styles.hb1}>
                <div className={styles.hb2}>
                  <div className={styles.subtit}>YunQi GeekPai 云栖极客派</div>
                  <div className={styles.desc}>
                    新大陆的登月者,
                    去探索未来世界的无限可能。GXIC2018，安全大赛，区块链活动，汇聚最geek的开发者；特设极客体验区，现场感受数据运算，8分钟成为contributor，super
                    coder
                    83行代码，坦克算法大赛等活动，各种新生代开启极客之旅。查看详情
                  </div>
                </div>
              </div>
              <div className={styles.hb3}>
                <div className={styles.hb4}>
                  <div className={styles.subtit}>Tech Go 云栖智能运动会</div>
                  <div className={styles.desc}>
                    运动和科技的结合，智能和肌肉一起发力，数据与肾上腺素同步共振。篮球、足球、跑步、自行车，在这里亲身体验前所未有的黑科技玩法。YOU
                    ARE TECH HERO！
                  </div>
                </div>
              </div>
              <div className={styles.hb5}>
                <div className={styles.hb6}>
                  <div className={styles.subtit}>
                    Music Festival 云栖·虾米音乐节
                  </div>
                  <div className={styles.desc}>
                    这是一场科技与音乐的碰撞、创新与传统的融合、潮流与经典的交锋。大牌汇聚，燃爆现场，辅助数字前沿科技呈现，奉上震撼持久的试听盛宴。云栖·虾米音乐节打造最热科技音乐现场，等你来撩！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  );
}
