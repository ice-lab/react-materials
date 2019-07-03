/* eslint react/no-string-refs:0 */
import React, { useState, useRef } from 'react';
import { Dialog, Input, Message, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default function Card(props) {
  const [visible, setVisible] = useState(false);
  const formEl = useRef(null);
  const { dialogTitle, buttonText } = props;

  function handleConfirm() {
    const { getFormValue } = props;
    formEl.current.validateAll((error, value) => {
      if (error) {
        Message.error('请输入完整的信息');
        return;
      }
      setVisible(false);
      getFormValue(value);
    });
  }

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        {buttonText}
      </Button>
      <Dialog
        visible={visible}
        onOk={handleConfirm}
        closeable="esc,mask,close"
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
        title={dialogTitle || buttonText}
      >
        <IceFormBinderWrapper ref={formEl}>
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
