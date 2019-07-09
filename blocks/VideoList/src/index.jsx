import React, { useState } from 'react';
import { Dialog, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const data = [
  {
    title: '汽车/车品',
    value: [
      {
        fee: 1500,
        desc:
          '1. 外观与内部360度展示，包含车内展示，包含模特<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性，实际使用效果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50040312475.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 模特实车内驾驶与使用，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br /> 3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50104638766.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1500,
        desc:
          '1. 模特车内展示外观与内部结构展示<br /> 2. 主要功能与亮点讲解并且试用<br /> 3. 同类商品或者同款商品中不同色号之间对比',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50104590975.mp4',
        videoType: '功能讲解',
      },
    ],
  },
  {
    title: '美食',
    value: [
      {
        fee: 500,
        desc:
          '1. 外观与内部360度展示<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50047536808.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 明确教学场景制作菜肴烘培等，制作步骤需要文案或者讲解说明<br /> 2. 包含厨房场景与1名模特，原料与最终成品出炉展示，包含品尝环节',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50094498364.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1500,
        desc:
          '1. 厨房等使用场景下拍摄，展示外观与内部结构<br /> 2. 主要功能讲解与掩饰，亮点功能讲解需要突出与同类产品的差异<br /> 3. 功能试用，展示效果',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50045264679.mp4',
        videoType: '功能讲解',
      },
    ],
  },
  {
    title: '电器',
    value: [
      {
        fee: 1000,
        desc:
          '1. 外观与内部360度展示<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50089460031.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 从某个具体使用场景出发，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br /> 3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50043016650.mp4',
        videoType: '评测教学',
      },
      {
        fee: 2000,
        desc:
          '1. 展示外观与内部结构展示<br /> 2. 主要功能与亮点讲解并且试用<br /> 3. 同类商品或者同款商品中不同色号之间对比',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50043016650.mp4',
        videoType: '功能讲解',
      },
    ],
  },
  {
    title: '数码',
    value: [
      {
        fee: 1000,
        desc:
          '1. 外观与内部360度展示<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50065208706.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 从某个具体使用场景出发，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br /> 3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50064102096.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1500,
        desc:
          '1. 展示外观与内部结构展示<br /> 2. 主要功能与亮点讲解并且试用<br /> 3. 同类商品或者同款商品中不同色号之间对比',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50074550753.mp4',
        videoType: '功能讲解',
      },
    ],
  },
  {
    title: '萌宠',
    value: [
      {
        fee: 1000,
        desc:
          '1. 模特（宠物模特）展示各个角度，需要展示颜色款式与不同搭配<br /> 2. 街景或者棚内场景化拍摄<br /> 3. 细节和亮点部分特写拍摄，并有文案说明',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50004100213.mp4',
        videoType: '穿搭街拍',
      },
      {
        fee: 1600,
        desc:
          '1. 从某个具体使用场景出发，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br /> 3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50001108245.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1500,
        desc:
          '1. 展示外观与内部结构<br /> 2. 主要功能讲解与掩饰，亮点功能讲解需要突出与同类产品的差异<br /> 3. 功能试用，展示效果',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50012826492.mp4',
        videoType: '功能与讲解',
      },
    ],
  },
  {
    title: '生活',
    value: [
      {
        fee: 1000,
        desc:
          '1. 外观与内部360度展示<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50072102766.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 从某个具体使用场景出发，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br />3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50043022518.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1000,
        desc:
          '1. 展示外观与内部结构<br /> 2. 主要功能讲解与掩饰，亮点功能讲解需要突出与同类产品的差异<br /> 3. 功能试用，展示效果',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50061822417.mp4',
        videoType: '功能讲解',
      },
    ],
  },
  {
    title: '旅行',
    value: [
      {
        fee: 500,
        desc:
          '1. 外观与内部360度展示<br /> 2. 特写细节与质感，包括单不限于材质、五金件等<br /> 3. 有文案与讲解说明材质工艺的特殊性',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50074630889.mp4',
        videoType: '外观与工艺',
      },
      {
        fee: 1500,
        desc:
          '1. 从某个具体使用场景出发，讲解产品结构与功能<br /> 2. 教学中涉及到的步骤文案说明，不同商品与型号标注清晰<br /> 3. 使用该商品完成的成果展示',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50009662520.mp4',
        videoType: '评测教学',
      },
      {
        fee: 1500,
        desc:
          '1. 展示外观与内部结构<br /> 2. 主要功能讲解与掩饰，亮点功能讲解需要突出与同类产品的差异<br /> 3. 功能试用，展示效果',
        videoUrl:
          'http://cloud.video.taobao.com//play/u/1124755687/p/1/e/6/t/1/50012810934.mp4',
        videoType: '功能讲解',
      },
    ],
  },
];

export default function VideoList() {
  const [index, setIndex] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogVideo, setDialogVideo] = useState({});

  const handleCateChange = (index) => {
    setIndex(index);
  };

  const handleOpen = (item) => {
    setDialogVisible(true);
    setDialogVideo(item);
  };

  const handleColse = () => {
    setDialogVisible(false);
  };

  return (
    <div className={styles.videoListContainer}>
      <ul className={styles.videoCate}>
        {data.map((item, dataIndex) => {
          const activeStyle =
            index === dataIndex ? styles.active : null;
          return (
            <li
              key={dataIndex}
              className={`${styles.videoCateItem} ${activeStyle}`}
              onClick={() => handleCateChange(dataIndex)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      <Row className={styles.videoList} gutter="20" wrap>
        {data[index].value.map((item, index) => {
          return (
            <Col xxs="24" s="12" l="8" key={index}>
              <div className={styles.videoCarditem}>
                <div className={styles.videoPosition}>
                  <img
                    alt=""
                    src={require('./images/TB1E0sbmpmWBuNjSspdXXbugXXa-84-84.png')}
                    className={styles.playerIcon}
                  />
                  <video
                    src={item.videoUrl}
                    controls={false}
                    className={styles.video}
                    onClick={() => handleOpen(item)}
                  >
                    <track
                      default
                      kind="captions"
                      src={item.videoUrl}
                    />
                    您的浏览器不支持播放该视频！
                  </video>
                </div>

                <div className={styles.videoInfo}>
                  <h5 className={styles.videoTitle}>{item.videoType}</h5>
                  <div className={styles.videoDesc}>
                    <div>服务包含内容：</div>
                    <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                  <div className={styles.videoFee}>
                    单支 ￥ <strong className={styles.fee}>{item.fee}</strong> 起
                  </div>
                  <a href="#" className={styles.videoLink}>
                    开始定制{' '}
                    <img
                      alt=""
                      src={require('./images/TB13yHPmrSYBuNjSspiXXXNzpXa-40-40.png')}
                      className={styles.arrowIcon}
                    />
                  </a>
                </div>

                <Dialog
                  visible={dialogVisible}
                  footer={false}
                  onClose={handleColse}
                  autoFocus={false}
                  closeable
                  className="video-dialog"
                >
                  <video
                    src={dialogVideo.videoUrl}
                    controls
                    className={styles.dialogVideo}
                    webkit-playsinline="false"
                  >
                    <track
                      default
                      kind="captions"
                      src={dialogVideo.videoUrl}
                    />
                    您的浏览器不支持播放该视频！
                  </video>
                  <a
                    href="#"
                    className={`${styles.videoLink} ${styles.start}`}
                  >
                    开始定制{' '}
                    <img
                      src={require('./images/TB13yHPmrSYBuNjSspiXXXNzpXa-40-40.png')}
                      className={styles.arrowIcon}
                      alt=""
                    />
                  </a>
                </Dialog>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
