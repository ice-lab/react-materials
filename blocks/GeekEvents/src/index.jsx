import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

import Summary from './Summary';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;

export default class GeekEvents extends Component {
  static displayName = 'GeekEvents';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentLeft} />
        <div className={styles.contentRight} />
        <ScrollOverPack>
          <div className={styles.content}>
            <QueueAnim
              key="queueAnim1"
              delay={200}
              duration={1000}
              interval={300}
              type="bottom"
            >
              <Summary
                key="summary"
                num={2}
                title="Events"
                subTitle="极客活动"
              />
            </QueueAnim>
            <QueueAnim
              key="queueAnim2"
              delay={500}
              duration={1000}
              interval={500}
              type="top"
            >
              <div key="image" className={styles.imageWrap}>
                <img
                  src={require('./images/TB1q7_6A41YBuNjy1zcXXbNcXXa-1440-900.png')}
                  alt=""
                  className={styles.image}
                />
              </div>
            </QueueAnim>

            <QueueAnim
              key="queueAnim3"
              delay={500}
              duration={1000}
              interval={500}
              type="bottom"
            >
              <div key="introWrap" className={styles.introWrap}>
                <div className={styles.introNum}>02.1</div>
                <div className={styles.introTitle}>阿里云IoT极客创新挑战赛2018</div>
                <div className={styles.introDesc}>
                  <div className={styles.introLine} />
                  <p className={styles.introText}>
                    美好生活是人类乃至地球所有物种的终极追求之一，接下来的智联网时代，又有什么惊喜在等着我们？
                    阿里云IoT事业部联合淘宝极有家、桃花源基金会和上海诺行发起了2018极客创新挑战赛。加入这场创新挑战，为自己，为地球上的其他物种，创出更美好的未来
                  </p>
                </div>
                <div className={styles.linkButton}>
                  <a className={styles.link}>了解更多</a>
                </div>
              </div>
            </QueueAnim>
          </div>
        </ScrollOverPack>
      </div>
    );
  }
}

