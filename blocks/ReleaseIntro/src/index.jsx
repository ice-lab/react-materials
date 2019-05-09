import { Menu, Button, Message, SplitButton } from '@alifd/next';
import React, { Component } from 'react';
import './index.modules.scss'

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
      <div className="styleswrapperContainer">
        <div className="stylesbgImage2" />
        <div className="styleswrapper">
          <div className="stylesbgImage">
            <div className="stylesbgImageMask" />
          </div>
          <div className="styleswrapperBody">
            <div className="stylessoftwareIntro">
              <div className="stylestitle">
                Iceworks <span className="stylessubtitle">{subTitle}</span>
              </div>
              <div className="stylesslogan">让前端工程变的轻松便捷</div>
              <div className="box">
                <SplitButton
                  menu={menu}
                  onClick={this.download}
                  size="large"
                  className="iceworks-download-btn">
                  立即下载
                  <span className="boxspan1">
                    {descriptor[osType].download}
                  </span>
                </SplitButton>
              </div>
              {loading ? null : (
                <div className="stylessoftwareDetail">
                  <div className="stylesversion">
                    <span className="boxspan2">
                      {data[osType].version}
                    </span>
                    <span className="boxspan3">
                      当前版本
                    </span>
                  </div>

                  <div className="stylesseparator" />
                  <div className="styleshistory">
                    <span style={{ display: 'block' }}>
                      {data[osType].releaseDate}
                    </span>
                    <span className="boxspan4">
                      发布日期
                    </span>
                  </div>
                </div>
              )}
              <div className="box2">
                <div className="box3">
                  运行环境：{descriptor[osType].env}
                </div>
              </div>
              <div className="box2">
                <a className="box2a" href={'#get-started'}>
                  立即开始
                </a>
              </div>
            </div>
            <div className="stylessoftware" />
          </div>
        </div>
      </div>
    );
  }
}

