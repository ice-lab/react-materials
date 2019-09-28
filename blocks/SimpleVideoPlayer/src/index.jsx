import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

import Video from './Video';
import VideoList from './VideoList';

const { Col, Row } = Grid;

export default function SimpleVideoPlayer() {
  const [isMobile, setMobile] = useState(false);
  const [videoLists] = useState(mockVideoData);
  const [reloadVideo, setReloadVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    poster: require('./images/TB1UctgfwmTBuNjy1XbXXaMrVXa-754-420.png'),
    title: '这里是示例视频1的视频标题',
    duration: '10:54',
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  });

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  const switchVideo = (selectVideo) => {
    setReloadVideo(true);
    setCurrentVideo(selectVideo);
    // 每次切换 video 需要将 video 标签彻底销毁重新渲染，否则不会生效
    setTimeout(() => {
      setReloadVideo(false);
    }, 100);
  };

  return (
    <div className="simple-video-player">
      <IceContainer>
        <Row gutter={20} wrap>
          <Col m="16" xxs="24">
            <div
              className={ `${styles.videoWrapper} ${(isMobile ? styles.videoWrapperMobile : {})}`}
              
            >
              {!reloadVideo && (
                <Video
                  {...currentVideo}
                  className={`${styles.video} ${(isMobile ? styles.videoMobile : {})}`}
                  
                />
              )}
            </div>
          </Col>
          <Col m="8" xxs="24">
            <VideoList
              currentVideo={currentVideo}
              list={videoLists}
              onClick={switchVideo}
            />
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}

const mockVideoData = [
  {
    poster: require('./images/TB1UctgfwmTBuNjy1XbXXaMrVXa-754-420.png'),
    title: '这里是示例视频1的视频标题',
    duration: '10:54',
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    poster: require('./images/TB1qEJ4fqmWBuNjy1XaXXXCbXXa-754-420.png'),
    title: '这里是示例视频2的视频标题',
    duration: '03:54',
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    poster: require('./images/TB1yHhWfuuSBuNjy1XcXXcYjFXa-754-420.png'),
    title: '这里是示例视频3的视频标题',
    duration: '10:54',
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    poster: require('./images/TB1FdDTfDtYBeNjy1XdXXXXyVXa-754-420.png'),
    title: '这里是示例视频4的视频标题',
    duration: '03:54',
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  },
];
