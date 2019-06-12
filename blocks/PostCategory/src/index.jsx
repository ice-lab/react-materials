import React, { Component } from 'react';
import styles from './index.module.scss'
import { Tab, Button } from '@alifd/next';

function mockCentent() {
  return Array.from({ length: 2 + Math.round(Math.random() * 5) }).map(() => {
    return {
      title: '长文章',
      cover:
        'https://img.alicdn.com/tfs/TB1sbkkXmBYBeNjy0FeXXbnmFXa-280-498.png',
      url: '#',
      detail: [
        {
          label: '模板描述',
          desc: '创作自由度高。'.repeat(2 + Math.round(Math.random() * 5)),
        },
        {
          label: '创作指导',
          desc: '<a href="#">好的长文章应该怎么写？</a>',
        },
      ],
    };
  });
}

export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tabs = [
      {
        tab: '帖子',
        icon: require('./images/post.png'),
        key: 'home',
        content: mockCentent(),
      },
      {
        tab: '短视频',
        icon: require('./images/video.png'),
        key: 'doc',
        content: mockCentent(),
      },
      {
        tab: '搭配',
        icon: require('./images/collect.png'),
        key: 'collect',
        content: mockCentent(),
      },
      {
        tab: '单品',
        icon: require('./images/item.png'),
        key: 'item',
        content: mockCentent(),
      },
      {
        tab: '问答',
        icon: require('./images/ask.png'),
        key: 'ask',
        content: mockCentent(),
      },
      {
        tab: '转发',
        icon: require('./images/fiy.png'),
        key: 'fiy',
        content: mockCentent(),
      },
    ];

    return (
      <div>
        <div className={styles.titleWrapper}>
          <span className={styles.fbxp}>
            发布新作品
          </span>
          <span className={styles.nrfx}>
            内容质量与粉丝效果好的作品可以得到更多频道曝光?
          </span>
        </div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
        >
          {tabs.map((item) => {
            return (
              <Tab.Item
                tabStyle={{ height: 60, padding: '0 15px' }}
                key={item.key}
                title={
                  <div className={styles.navItemWraper}>
                    <img
                      alt={item.tab}
                      src={item.icon}
                      className={styles.imgas}
                    />
                    {item.tab}
                  </div>
                }
              >
                <div className={styles.postCategoryList}>
                  {item.content.map((item, index) => {
                    return (
                      <div key={index} className={styles.postCategoryItem}>
                        <div className={styles.coverWrapper}>
                          <img
                            alt={item.title}
                            className={styles.imgbs}
                            src={item.cover}
                          />
                        </div>
                        <div className={styles.blockDetail}>
                          <h3 className={styles.blockTitle}>{item.title}</h3>

                          {item.detail.map((desc, detailIndex) => {
                            return (
                              <div key={detailIndex} className={styles.blockItem}>
                                <label className={styles.blockLable}>
                                  {desc.label}
                                </label>
                                <div
                                  className={styles.blockDesc}
                                  dangerouslySetInnerHTML={{
                                    __html: desc.desc,
                                  }}
                                />
                              </div>
                            );
                          })}
                          <Button
                            className={styles.blockBtn}
                            type="primary"
                            component="a"
                            href={item.url}
                          >
                            立即创作
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Tab.Item>
            );
          })}
        </Tab>
      </div>
    );
  }
}
