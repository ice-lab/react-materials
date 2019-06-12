import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Button, Icon, Grid } from '@alifd/next';
import data from './data';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Item } = Tab;

export default class DownloadCard extends Component {
  static displayName = 'DownloadCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabData: data,
    };
  }

  renderContent = (items) => {
    return items.map((item, index) => {
      return (
        <Col key={index}>
          <div key={index} className={styles.columnCardItem}>
            <div className={styles.cardBody}>
              <div className={styles.avatarWrapper}>
                <img className={styles.img} src={item.img} alt="头像" />
              </div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>

            <div className={styles.downloadButtons}>
              <Button
                href={item.androidSDK}
                download
                className={styles.leftButton}
                type="primary"
              >
                <Icon type="download" /> Android SDK
              </Button>
              <Button
                href={item.iosSDK}
                download
                className={styles.rightButton}
                type="primary"
              >
                <Icon type="download" /> IOS SDK
              </Button>
            </div>

            <div className={styles.cardBottom}>
              <a href={item.version} className={styles.bottomText}>
                版本记录
              </a>
              <a href={item.docs} className={styles.bottomText}>
                集成文档
              </a>
              <a href={item.guide} className={styles.bottomText}>
                使用指南
              </a>
              <a href={item.faq} className={styles.bottomText}>
                FAQ
              </a>
            </div>
          </div>
        </Col>
      );
    });
  };

  render() {
    const { tabData } = this.state;
    return (
      <div className={styles.downloadCard}>
        <IceContainer>
          <Tab contentStyle={{ padding: '20px 5px' }}>
            <Tab.Item title="客户端SDK" key="1">
              <Row gutter="20" wrap>
                {tabData.clientSDK
                  ? this.renderContent(tabData.clientSDK)
                  : '暂无数据'}
              </Row>
            </Tab.Item>
            <Tab.Item title="服务端SDK" key="2">
              <Row gutter="20" wrap>
                {tabData.serverSDK
                  ? this.renderContent(tabData.serverSDK)
                  : '暂无数据'}
              </Row>
            </Tab.Item>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}