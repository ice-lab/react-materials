import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import PageHead from '@/components/PageHead';
import styles from './index.module.scss';

let form;
export default function OrderForm() {
  const [value] = useState({});

  const formChange = (formValue) => {
    console.log('value', formValue);
  };

  const validateAllFormField = () => {
    form.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  return (
    <div>
      <PageHead title="添加订单" />
      <IceContainer className={styles.iceContainer}>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef => form = formRef}
        >
          <div className={styles.formItem}>
            <div className={styles.formLabel}>客户姓名：</div>
            <IceFormBinder name="name" required message="客户姓名必填">
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="name" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品名称：</div>
            <IceFormBinder
              name="commodityName"
              required
              message="商品名称必填"
            >
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="commodityName" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>联系方式：</div>
            <IceFormBinder name="phone" required message="联系方式必填">
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="phone" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>订单备注：</div>
            <IceFormBinder name="description">
              <Input.TextArea className={styles.newInput} />
            </IceFormBinder>
          </div>
          <Button
            type="primary"
            onClick={validateAllFormField}
            className={styles.button}
          >
            提 交
          </Button>
        </IceFormBinderWrapper>
      </IceContainer>
    </div>
  );
}
