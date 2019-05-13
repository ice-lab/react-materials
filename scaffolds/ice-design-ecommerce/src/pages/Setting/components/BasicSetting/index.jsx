/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default class BasicSetting extends Component {
  static displayName = 'BasicSetting';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  formChange = (value) => {
    console.log('value', value);
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  render() {
    return (
      <IceContainer title="基本设置" className={styles.container}>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>英文名：</div>
              <IceFormBinder name="cnName">
                <Input placeholder="taoxiaobao" style={{ width: '400px' }} />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>中文名：</div>
              <IceFormBinder name="zhName">
                <Input placeholder="淘小宝" style={{ width: '400px' }} />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>个人简介：</div>
              <IceFormBinder name="description">
                <Input.TextArea style={{ width: '400px' }} />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>博客地址：</div>
              <IceFormBinder
                required
                name="url"
                triggerType="onBlur"
                message="验证地址必填"
              >
                <Input type="url" style={{ width: '400px' }} />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="url" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>个人邮箱：</div>
              <IceFormBinder
                required
                name="email"
                triggerType="onBlur"
                message="邮箱地址必填"
              >
                <Input type="email" style={{ width: '400px' }} />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="email" />
              </div>
            </div>
            <Button type="primary" onClick={this.validateAllFormField}>
              提 交
            </Button>
          </div>
        </IceFormBinderWrapper>
      </IceContainer>
    );
  }
}

