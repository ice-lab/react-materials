import React from 'react';
import { Timeline } from '@alifd/next';
import IceContainer from '@icedesign/container';
import data from './data';
import styles from './index.module.scss';

const { Item: TimelineItem } = Timeline;

export default function Activites() {
  function renderAvatar(items) {
    return (
      <div>
        {items.map((item, index) => {
          return <img src={item} alt="" key={index} className={styles.avatar} />;
        })}
      </div>
    );
  }

  function renderContent(content) {
    return (
      <div className={styles.content}>
        <p className={styles.time}>{content.time}</p>
        <p className={styles.desc}>{content.desc}</p>
        {renderAvatar(content.avatar)}
      </div>
    );
  }

  return (
    <IceContainer title="动态列表">
      <Timeline>
        {data.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              title={item.title}
              content={renderContent(item.content)}
              state={item.state}
            />
          );
        })}
      </Timeline>
    </IceContainer>
  );
}
