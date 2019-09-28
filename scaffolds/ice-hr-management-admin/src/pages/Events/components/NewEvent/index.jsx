import React, { useState, useRef } from 'react';
import { Button, Dialog, Input, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default function NewEvent() {
  const [visible, setVisible] = useState(false);
  const [formValue, setFormValue] = useState({});
  const formEl = useRef(null);

  function onOpen() {
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }

  function formChange(value) {
    setFormValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    formEl.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('添加成功');
      setVisible(false);
    });
  }

  return (
    <IceContainer>
      <Button
        type="primary"
        onClick={onOpen}
        className={styles.btn}
      >
        添加事项
      </Button>
      <Dialog
        visible={visible}
        onOk={handleSubmit}
        onClose={onClose}
        onCancel={onClose}
        title="添加事项"
      >
        <IceFormBinderWrapper
          value={formValue}
          onChange={formChange}
          ref={formEl}
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
