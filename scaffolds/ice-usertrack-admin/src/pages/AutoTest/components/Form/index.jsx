import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { withRouter } from 'react-router-dom';

import styles from './index.module.scss';

const Form = withRouter((props) => {
  const formRef = useRef(null);
  const [value, setValue] = useState({
    title: '',
  });

  function handleSubmit() {
    formRef.current.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log(values);
      Message.success('提交成功');
      props.history.push('/');
    });
  }
  function handleFormChange(formValue) {
    setValue(formValue);
  }

  return (
    <IceContainer className={styles.container}>
      <div className={styles.title}>自动化测试 URL</div>
      <div className={styles.summary}>
        <p>您可输需要测试的URL地址，会调用自动化验证接口进行验证。</p>
        <p>验证结束后会将验证结果发至测试人，请注意查收邮箱。</p>
      </div>
      <IceFormBinderWrapper
        value={value}
        ref={formRef}
        onChange={handleFormChange}
      >
        <div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>验证地址：</div>
            <IceFormBinder
              required
              triggerType="onBlur"
              message="验证地址必填"
              name="url"
            >
              <Input
                placeholder="https://alibaba.github.io/ice/"
                type="url"
                style={{ width: '400px' }}
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

                style={{ width: '400px' }}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="email" />
            </div>
          </div>
          <Button
            type="primary"
            onClick={handleSubmit}
          >
            提 交
          </Button>
        </div>
      </IceFormBinderWrapper>
    </IceContainer>
  );
});

export default Form;
