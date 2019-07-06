import React from 'react';
import Img from '@icedesign/img';
import styles from './index.module.scss';

export default function VideoList(props) {
  const { list, currentVideo } = props;

  const switchVideo = (video) => {
    if (props.onClick) {
      props.onClick(video);
    }
  };

  return (
    <div className={styles.videoList}>
      {list.length > 0
        ? list.map((item, index) => {
            const isCurrentVideo =
              JSON.stringify(item) === JSON.stringify(currentVideo);

            return (
              <div
                key={index}
                className={`${styles.videoItem} ${(isCurrentVideo ? styles.activeVideoItem : {})}`}
                
                onClick={() => switchVideo(item)}
              >
                <div className={styles.poster}>
                  <Img
                    src={item.poster}
                    width={168}
                    height={94}
                    type="cover"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.videoTitle}>{item.title}</div>
                  <div className={styles.videoDuration}>{item.duration}</div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
