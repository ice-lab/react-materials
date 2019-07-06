import React, { useState, useRef } from 'react';
import { Input, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState('');
  const formRef = useRef(null);

  const emailChange = (newValue) => {
    setEmail(newValue.email);
  };

  const sendMessage = () => {
    formRef.current.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  return (
    <IceContainer>
      <div className={styles.title}>忘记密码</div>
      <div className={styles.subtitle}>
        填入您的邮箱，重置后的密码会发到您的邮箱
      </div>
      <div className={styles.groupTitle}>邮箱地址：</div>
      <div className={styles.inputWrap}>
        <FormBinderWrapper
          ref={formRef}
          value={{
            email,
          }}
          onChange={emailChange}
        >
          <div>
            <FormBinder
              required
              type="email"
              message="Email 地址不合法, 请检查"
              name="email"
            >
              <Input className={styles.input} placeholder="请输入邮箱地址" />
            </FormBinder>
            <div>
              <FormError name="email" />
            </div>
          </div>
        </FormBinderWrapper>
      </div>

      <div className={styles.btnWrap}>
        <Button type="primary" onClick={sendMessage}>
          发送新密码
        </Button>
      </div>
    </IceContainer>
  );
}
