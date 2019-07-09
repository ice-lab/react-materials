import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import Filter from './Filter';
import styles from './index.module.scss';

export default function ValidateForm() {
  const formRef = useRef(null);
  const [value, setValue] = useState({
    title: '',
  });

  const formChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  const validateAllFormField = () => {
    formRef.current.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  return (
    <div className={styles.validateForm}>
      <Filter />
      <IceContainer className={styles.container}>
        <div className={styles.title}>自动化测试 URL</div>
        <div className={styles.summary}>
          <p>您可输需要测试的URL地址，会调用自动化验证接口进行验证。</p>
          <p>验证结束后会将验证结果发至测试人，请注意查收邮箱。</p>
        </div>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef}
        >
          <div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>验证地址：</div>
              <IceFormBinder
                name="url"
                required
                triggerType="onBlur"
                message="验证地址必填"
              >
                <Input
                  placeholder="https://alibaba.github.io/ice/"
                  type="url"
                  size="large"
                  className={styles.text}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="url" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>接收邮箱：</div>
              <IceFormBinder
                required
                name="email"
                triggerType="onBlur"
                message="邮箱地址必填"
              >
                <Input
                  placeholder="abc@example.com"
                  type="email"
                  size="large"
                  className={styles.add}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="email" />
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={validateAllFormField}
            >
              提 交
            </Button>
          </div>
        </IceFormBinderWrapper>
      </IceContainer>
    </div>
  );
}
