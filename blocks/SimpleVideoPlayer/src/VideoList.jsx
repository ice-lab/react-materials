import React, { Component } from 'react';
import Img from '@icedesign/img';
import styles from './index.module.scss';

export default class VideoList extends Component {
  switchVideo = (video) => {
    if (this.props.onClick) {
      this.props.onClick(video);
    }
  };

  render() {
    const { list, currentVideo } = this.props;

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
                 
                  onClick={this.switchVideo.bind(this, item)}
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
}


