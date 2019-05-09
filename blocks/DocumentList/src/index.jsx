import React, { Component } from 'react';
import { Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from './ContainerTitle';
import styles from './index.module.scss';

const mockData = [
  {
    title: '环境搭建文档',
    description: '有关新人入门环境搭建的相关文档',
    time: '3小时前',
  },
  {
    title: '测试文档',
    description: '有关测试的相关文档',
    time: '12小时前',
  },
];

export default class DocumentList extends Component {
  static displayName = 'DocumentList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className={styles.container2}>
        <ContainerTitle title="项目文档" buttonText="新建文档" />
        <div className={styles.content}>
          {mockData.map((item, index) => {
            return (
              <a href="#" className={styles.item} key={index}>
                <Icon type="office" className={styles.icon} />
                <span className={styles.title2}>{item.title}</span>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.time}>{item.time}</span>
              </a>
            );
          })}
        </div>
      </IceContainer>
    );
  }
}
