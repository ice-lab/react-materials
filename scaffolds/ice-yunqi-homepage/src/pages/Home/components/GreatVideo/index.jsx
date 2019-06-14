import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import Texty from 'rc-texty';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;
export default class GreatVideo extends Component {
  static displayName = 'GreatVideo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mask} />
          <video
            className={styles.video}
            poster="https://img.alicdn.com/tfs/TB1IAHRuamWBuNjy1XaXXXCbXXa-2880-932.png"
            autoPlay
            muted
            loop
          >
            <source
              src="//cloud.video.taobao.com/play/u/10654505/p/1/e/6/t/1/50082534951.mp4"
              type="video/mp4"
            />
          </video>
          <ScrollOverPack always={false}>
            <div className={styles.introContainer} key="introContainer">
              <div className={styles.introContent}>
                <h3 className={styles.title}>
                  <Texty type="bottom" delay={300}>
                    WATCH2017
                  </Texty>
                </h3>
                <div className={styles.desc}>
                  <Texty type="bottom" delay={500}>
                    2017杭州云栖大会精彩视频
                  </Texty>
                </div>
              </div>
            </div>
          </ScrollOverPack>
        </div>
      </div>
    );
  }
}
