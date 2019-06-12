import { Menu, Button, Message, SplitButton } from '@alifd/next';
import React, { Component } from 'react';
import styles from './index.module.scss'

const descriptor = {
  'darwin-x64-prod': {
    download: 'For MacOS',
    env: 'macOS 10.9 及以上',
  },
  'win-x64-prod': {
    download: 'For Windows X64',
    env: '64位，Win 7 及以上',
  },
};

export default class ReleaseIntro extends Component {
  static displayName = 'ReleaseIntro';

  constructor(props) {
    super(props);
    const ua = navigator.userAgent;
    let osType = 'darwin-x64-prod'; // mac for default
    if (/Mac/.test(ua)) {
      // this is macOS ha
    } else if (/Windows/.test(ua)) {
      osType = 'win-x64-prod';
    }
    this.state = {
      osType,
      loading: false,
      data: {
        'darwin-x64-prod': {
          name: 'iceworks',
          description: 'ICE Desktop Application.',
          install:
            'http://iceworks.oss-cn-hangzhou.aliyuncs.com/mac/Iceworks-1.6.2.dmg',
          version: '1.6.2',
          releaseDate: '2018-04-23',
        },
        'win-x64-prod': {
          name: 'iceworks',
          description: 'ICE Desktop Application.',
          install:
            'http://iceworks.oss-cn-hangzhou.aliyuncs.com/win/Iceworks-setup-1.6.2.exe',
          version: '1.6.2',
          releaseDate: '2018-04-23',
        },
      },
    };
  }

  changeSelectMenu = (select) => {
    this.setState({ osType: select });
  };

  download = () => {
    const { data, loading, osType } = this.state;
    if (loading) {
      Message.success('请稍等');
    } else {
      // 开始下载
      location.href = data[osType].install;
    }
  };

  render() {
    const { data, loading, osType } = this.state;
    const menu = (
      <Menu>
        <Menu.Item
          onClick={this.changeSelectMenu.bind(this, 'darwin-x64-prod')}
          key="darwin-x64-prod"
        >
          For MacOS 版本
        </Menu.Item>
        <Menu.Item
          onClick={this.changeSelectMenu.bind(this, 'win-x64-prod')}
          key="win-x64-prod"
        >
          For Windows 版本(64位)
        </Menu.Item>
      </Menu>
    );
    const ver = loading ? '0' : data[osType].version;
    const subTitle = ver[0] === '0' ? 'Beta' : '';

    return (
      <div className={styles.wrapperContainer}>
        <div className={styles.bgImage2} />
        <div className={styles.wrapper}>
          <div className={styles.bgImage}>
            <div className={styles.bgImageMask} />
          </div>
          <div className={styles.wrapperBody}>
            <div className={styles.softwareIntro}>
              <div className={styles.title}>
                Iceworks <span className={styles.subtitle}>{subTitle}</span>
              </div>
              <div className={styles.slogan}>让前端工程变的轻松便捷</div>
              <div className={styles.box}>
                <SplitButton
                  menu={menu}
                  onClick={this.download}
                  size="large"
                  className="iceworks-download-btn">
                  立即下载
                  <span className={styles.boxspan1}>
                    {descriptor[osType].download}
                  </span>
                </SplitButton>
              </div>
              {loading ? null : (
                <div className={styles.softwareDetail}>
                  <div className={styles.version}>
                    <span className={styles.boxspan2}>
                      {data[osType].version}
                    </span>
                    <span className={styles.boxspan3}>
                      当前版本
                    </span>
                  </div>

                  <div className={styles.separator} />
                  <div className={styles.history}>
                    <span className={styles.soana}>
                      {data[osType].releaseDate}
                    </span>
                    <span className={styles.boxspan4}>
                      发布日期
                    </span>
                  </div>
                </div>
              )}
              <div className={styles.box2}>
                <div className={styles.box3}>
                  运行环境：{descriptor[osType].env}
                </div>
              </div>
              <div className={styles.box2}>
                <a className={styles.box2a} href={'#get-started'}>
                  立即开始
                </a>
              </div>
            </div>
            <div className={styles.software} />
          </div>
        </div>
      </div>
    );
  }
}

