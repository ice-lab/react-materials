import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import Summary from '../Summary';
import MOCK_DATA from './data';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

export default () => (
  <div className={styles.container}>
    <ScrollOverPack>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <QueueAnim
            key="queueAnim"
            delay={200}
            duration={1000}
            interval={300}
            type="bottom"
          >
            <Summary
              key="summary"
              num={3}
              title="Geek Workshop"
              subTitle="工作坊"
            />
          </QueueAnim>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.items}>
            <QueueAnim
              delay={100}
              duration={450}
              interval={200}
              type="bottom"
            >
              {MOCK_DATA.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <div className={styles.itemNum}>{`0${item.id}`}</div>
                    <div className={styles.itemTitle}>{item.title}</div>
                  </div>
                );
              })}
            </QueueAnim>
          </div>
        </div>
      </div>
    </ScrollOverPack>
  </div>
);
