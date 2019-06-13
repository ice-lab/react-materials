/* eslint react/no-string-refs: 0 */
import React, { Component } from 'react';
import { Button, Dialog, Input, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss'

export default class NewEvent extends Component {
  state = {
    visible: false,
    value: {},
  };

  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('添加成功');
      this.setState({
        visible: false,
      });
    });
  };

  render() {
    return (
      <IceContainer>
        <Button
          type="primary"
          onClick={this.onOpen}
          className={styles.btn}
        >
          添加事项
        </Button>
        <Dialog
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onClose={this.onClose}
          onCancel={this.onClose}
          title="添加事项"
        >
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div className={styles.formItems}>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>标题</div>
                <IceFormBinder name="title" required message="必填">
                  <Input
                    maxLength={20}
                    placeholder="请输入标题"
                    className={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="title" />
              </div>

              <div className={styles.formItem}>
                <div className={styles.formLabel}>描述</div>
                <IceFormBinder name="description" required message="必填">
                  <Input
                    maxLength={20}
                    placeholder="请输入描述"
                    className={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="description" />
              </div>

              <div className={styles.formItem}>
                <div className={styles.formLabel}>地址</div>
                <IceFormBinder name="address">
                  <Input
                    maxLength={20}
                    placeholder="选题"
                    className={styles.inputCol}
                  />
                </IceFormBinder>
              </div>
            </div>
          </IceFormBinderWrapper>
        </Dialog>
      </IceContainer>
    );
  }
}
