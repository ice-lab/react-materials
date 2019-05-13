import React, { Component } from 'react';
import { Input } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../../../../components/ContainerTitle';
import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 6 }).map((item, index) => {
    return {
      name: '神经网络模型',
      count: `${index}`,
    };
  });
};

export default class ModelList extends Component {
  static displayName = 'ModelList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Input 发生改变的时候触发的回调
   */
  handleChange = (value) => {
    console.log({ value });
  };

  render() {
    const mockData = getData();
    return (
      <div className={styles.wrap}>
        <IceContainer>
          <Input
            size="large"
            style={{ width: '100%' }}
            placeholder="输入关键字搜索"
            onChange={this.handleChange}
          />
        </IceContainer>
        <IceContainer className={styles.modelList}>
          <ContainerTitle title="模型服务列表" />
          <div className={styles.items}>
            {mockData.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.count}>{item.count}</span>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}

