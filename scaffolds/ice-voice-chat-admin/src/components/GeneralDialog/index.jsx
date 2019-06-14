/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Dialog, Input, Message, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default class Card extends Component {
  state = {
    visible: false,
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

  handleConfirm = () => {
    const { getFormValue } = this.props;
    console.log(this.props);
    this.refs.form.validateAll((error, value) => {
      if (error) {
        Message.error('请输入完整的信息');
        return;
      }

      this.setState(
        {
          visible: false,
        },
        () => {
          getFormValue(value);
        }
      );
    });
  };

  render() {
    const { buttonText, dialogTitle } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.onOpen}>
          {buttonText}
        </Button>
        <Dialog
          visible={this.state.visible}
          onOk={this.handleConfirm}
          closeable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title={dialogTitle || buttonText}
        >
          <IceFormBinderWrapper value={this.state.value} ref="form">
            <div className={styles.formContent}>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>标题</div>
                <IceFormBinder required>
                  <Input name="title" style={{ width: '400px' }} />
                </IceFormBinder>
              </div>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>描述</div>
                <IceFormBinder required>
                  <Input.TextArea
                    placeholder="这里是一段描述"
                    name="desc"
                    style={{ width: '400px' }}
                  />
                </IceFormBinder>
              </div>
            </div>
          </IceFormBinderWrapper>
        </Dialog>
      </div>
    );
  }
}

