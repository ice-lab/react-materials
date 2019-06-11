import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import styles from  './index.module.scss'

const dataSource = [
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1nQ4hgILJ8KJjy0FnXXcFDpXa-132-126.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1OuuTgL6H8KJjy0FjXXaXepXa-132-126.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1aTaIgRTH8KJjy0FiXXcRsXXa-132-123.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1dTaIgRTH8KJjy0FiXXcRsXXa-120-120.png',
  },
];

export default class TopicCard extends Component {
  static displayName = 'TopicCard';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <IceContainer title="数据概览">
          <div className={styles.items}>
            {dataSource.map((item, idx) => {
              return (
                <div
                className={styles.item}
                  key={`card-item-${idx}`}
                >
                  <div className={styles.cover}>
                    <img alt="icon" src={item.icon} className={styles.icon} />
                  </div>
                  <div>
                    <div className={styles.meta}>{item.meta}</div>
                    <div className={styles.total}>{item.total}</div>
                    <div className={styles.compareText}>
                      较前日 <span className={styles.up}> ↑ +{item.up}</span>
                    </div>
                    <div className={styles.compareText}>
                      近7天 <span className={styles.down}> ↓ -{item.down}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}
