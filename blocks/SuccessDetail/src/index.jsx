import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Step } from '@alifd/next';
import styles from './index.module.scss';

export default class SuccessDetail extends Component {
  static displayName = 'SuccessDetail';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: ['填写信息', '申请审核', '开通账号', '完成'], // 步骤条信息
      current: 1, // 当前步骤
      type: 'dot', // 步骤的类型，可选值: 'circle', 'arrow', 'dot'
    };
  }

  render() {
    const { value, current, type } = this.state;
    return (
      <div className={`${styles.successDetail} success-detail `} >
        <IceContainer className={styles.container}>
          <div className={`${styles.successDetailHead} success-detail-head`}  >
            <img
              src={require('./images/TB1ya6gh0zJ8KJjSspkXXbF7VXa-156-156.png')}
              className={styles.img}
              alt=""
            />
            <h3 className="title" className={styles.title}>
              提交成功
            </h3>
          </div>
          <p  className={styles.summary}>
            本文字区域可以展示简单的说明
          </p>
          <p  className={styles.descrpiton}>
            如果有跟多细节需要展示，可以补充在下面这里，一些相关的介绍和描述
          </p>
          <Step current={current} shape={type} className={styles.nextStep}>
            {value.map((item, index) => {
              return <Step.Item key={index} title={item} />;
            })}
          </Step>
          <div  className={styles.buttons}>
            <Button type="normal" className={styles.btn}>
              返回首页
            </Button>
            <Button type="primary">查看更多</Button>
          </div>
        </IceContainer>
      </div>
    );
  }
}

