import React from 'react';
import IceContainer from '@icedesign/container';
import { Icon } from '@alifd/next';

import styles from './index.module.scss';

const ITEMS = [
  {
    title: 'Inbox',
    icon: 'box',
    badge: '654',
    color: '#ee706d',
  },
  {
    title: 'Profile visits',
    icon: 'browse',
    badge: '565',
    color: '#5e83fb',
  },
  {
    title: 'Call',
    icon: 'phone',
    badge: '12',
    color: '#f7da47',
  },
  {
    title: 'Message',
    icon: 'atm-away',
    badge: '54',
    color: '#58ca9a',
  },
  {
    title: 'Notifications',
    icon: 'lights',
    badge: '56',
    color: '#447eff',
  },
];

export default function Notice() {
  return (
    <IceContainer>
      {ITEMS.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <Icon type={item.icon} className={styles.icon} />
            <span className={styles.title}>{item.title}</span>
            <span
              style={{
                color: item.color,
                border: `1px solid ${item.color}`,
              }}
              className={styles.badge}
            >
              {item.badge}
            </span>
          </div>
        );
      })}
    </IceContainer>
  );
}
