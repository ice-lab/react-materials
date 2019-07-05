import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import ContainerTitle from '@/components/ContainerTitle';
import styles from './index.module.scss';

export default function BasicSetting() {
  const [value] = useState({
    zhName: '飞冰',
    cName: 'ICE',
  });

  const formChange = (v) => {
    console.log('value', v);
  };

  let formRef;
  const validateAllFormField = () => {
    formRef.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  return (
    <div>
      <ContainerTitle title="基本设置" />
      <IceContainer className={styles.container}>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={form => formRef = form}
        >
          <div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>英文名：</div>
              <IceFormBinder name="cnName">
                <Input
                  disabled
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>中文名：</div>
              <IceFormBinder name="zhName">
                <Input
                  disabled
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>项目简介：</div>
              <IceFormBinder name="description">
                <Input.TextArea style={{ width: '400px' }} />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>仓库地址：</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="验证地址必填"
                name="url"
              >
                <Input
                  type="url"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="url" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>反馈邮箱：</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="邮箱地址必填"
                name="email"
              >
                <Input
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
